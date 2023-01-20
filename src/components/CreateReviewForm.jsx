import { View, StyleSheet } from "react-native"
import { Formik, } from 'formik';
import FormikTextInput from "./FormikTextInput";
import LargeButton from "./LargeButton";
import * as yup from 'yup';
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/queries";
import { useNavigate } from "react-router-native";

const initialValues = {
  ownerName: '',
  repositoryName: '',
  ratingField: 0,
  text: ''
}

const styles = StyleSheet.create({
  inputFieldsContainer: {
    backgroundColor: 'white',
    paddingBottom: 15
  }
})

const validationSchema = yup.object().shape({
  ownerName: yup.string()
    .required('Reposity owner name is required'),
  repositoryName: yup.string()
    .required('Repository name is required'),
  ratingField: yup.number().integer().min(0).max(100)
    .required('Rating is required')
})

const CreateReviewForm = () => {

    const [createReview] = useMutation(CREATE_REVIEW)
    
    const navigate = useNavigate()
    
    const onSubmit = async ({ ownerName, repositoryName, ratingField, text }) => {

        const rating = Number(ratingField)

        try {
            const { data } = await createReview({variables: {review: {ownerName, repositoryName, rating, text}}});
            console.log(data);
          } catch (e) {
            console.log('Error ', e);
          }
        
        navigate('/repostitories')
    }

    return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit }) => <View style={styles.inputFieldsContainer}>
        <FormikTextInput name="ownerName" placeholder="Repostiy owner name"/>
        <FormikTextInput name="repositoryName" placeholder="Reposity name"/>
        <FormikTextInput name="ratingField" placeholder="Rating between 0 and 100"/>
        <FormikTextInput name="text" placeholder="Review" height={'auto'} multiline={true}/>
        <LargeButton handleButton={handleSubmit} text='Create a review'/>
      </View>
    }
    </Formik>
    )
  
}
export default CreateReviewForm