const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarBackground: '#24292e',
    appBarText: '#FFFFFF',
    signInBackground: '#D3D3D3',
    errorColor: '#d73a4a',
    white: '#FFFFFF'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: 'System',
    android: 'Roboto',
    ios: 'Arial'
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: '#0366d6',
    fontWeight: '700',
    color: '#FFFFFF',
    borderRadius: 5,
    padding:15,
    margin: 15,
    textAlign:'center'
  },
  reviewButtonsContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'space-evenly'
  },
  viewButton: {
    minWidth: 180,
    backgroundColor: '#0366d6',
    fontWeight: '700',
    color: '#FFFFFF',
    borderRadius: 5,
    padding:15,
    textAlign:'center'
  },
  deleteButton: {
    minWidth: 180,
    backgroundColor: 'red',
    fontWeight: '700',
    color: '#FFFFFF',
    borderRadius: 5,
    padding:15,
    textAlign:'center'
  },
  mainContainer: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#ddd'
  },
  searchBarStyles: {
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  pickerStyle: {
    margin:10,
    marginLeft: 10
  }
}

export default theme