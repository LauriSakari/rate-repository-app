
import { View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'
import theme from '../theme'
import AppBar from './AppBar'
import CreateReviewForm from './CreateReviewForm'
import MyReviews from './MyReviews'
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import SignUpForm from './SignUpForm'
import SingleRepositoryPage from './SingleRepositoryPage'


const Main = () => {
  return (
    <View style={theme.mainContainer}>
      <AppBar/>
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUpForm />} exact />
        <Route path="/createreview" element={<CreateReviewForm />} exact />
        <Route path="/myreviews" element={<MyReviews />} exact />
        <Route path="/repositories/:id" element={<SingleRepositoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

export default Main