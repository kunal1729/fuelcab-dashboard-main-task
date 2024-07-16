# How to set up a project using .env variables

## Setup Instructions

1. Clone the repository.
2. Navigate to the repository path.
3. Install dependencies.
4. **Firebase Configuration**:  
    - Login to Firebase and set up project required keys.

5. **Create a .env file** in the root directory of your project.  
   Add environment variables to the .env file in the following format:
   ```
   REACT_APP_FIREBASE_APIKEY="your-api-key"
   REACT_APP_FIREBASE_AUTHDOMAIN="your-api-key"
   REACT_APP_FIREBASE_DATABASEURL="your-api-key"
   REACT_APP_FIREBASE_PROJECTID="your-api-key"
   REACT_APP_FIREBASE_STORAGEBUCKET="your-api-key"
   REACT_APP_FIREBASE_MESSAGINGSENDERID="your-api-key"
   REACT_APP_FIREBASE_APPID="your-api-key"
   REACT_APP_FIREBASE_MEASUREMENTID="your-api-key"
   REACT_APP_LOCATIONIQ_TOKEN=pk.89a00138203d6864dd794b9665d073ec
   REACT_APP_RAZORPAY_KEY=rzp_test_lwWpVIxgAcUcqj
   ```

6. **Ensure key-value pairs** are correctly placed in the .env file.  
   - The first 8 key-value pairs are obtained from your Firebase database.  
   - The last 2 pairs should be pasted as provided.  
   - Make sure to use `process.env`.

7. **Edit key names in your code** to match those in the .env file.  
   For example, if the key is `REACT_APP_LOCATIONIQ_TOKEN`, in the code it should be:  
   ```javascript
   const locationIQ_TOKEN = process.env.REACT_APP_LOCATIONIQ_TOKEN;
   ```
   Change all other pairs accordingly.

8. **Additional Notes**:
   - Keep your environment variables (*.env) files secure and do not commit them to version control.
   - Refer to the Firebase documentation for more information on setting up Firebase services and managing environment variables.
  


#Understanding the File Structure

1.COMPONENTS -> this folder contains all the components or the parts of the web Page that are 
                used in the website.Each page is broken down into several components.
                
The components folder includes: 
      a. AddressInput
      b. CookiesConsentModal
      c. DeliveryCard
      d. Footer
      e. Map
      f. Marker
      d. Modals
      e. Navbar
      f. OrderSuccessModal
      g. PaymentModal 
      h. PaymentPopUp
      i. ProductCard
      j. ProductSearchBar
      k. ProtectedRoute
      l. Quotation
      m. QuoteForm
      n. ScrollToHashElement
      o. ScrollToTop
      p. StarRating
      q. SubCategorySelector
      r. SupportDropzone
      s. Transaction Table
      t. TransactionsCard
      u. UIElements
      v. layout




2. CONSTANTS -> A "constants" folder serves as a centralized location for storing constant 
               values, variables, or configuration settings that are used throughout the application. Constants are values that do not change during the execution of the program and are often used to store configuration parameters, default values, or other fixed data.

This contains :
   1.delivery.js -> This contains the delivery status of order
   2.list.js ->  This contains the list of products along with there description
   3.product.js -> This contains the name of products unit
   4.transaction.js -> This contains the payment modes
   5.user.js -> This contain the type of user using the website for i.e buyer,seller or admin




3.PAGES -> The "pages" folder is a directory within a  website that typically contains 
          individual files or modules  in the form of components corresponding to different pages of the application.
There is a file called index.js where all the pages are imported and inside each Page there are multiple of components used.

The pages include:
         1.AboutUs 
         2.BlogDetails
         3.Blogs
         4.Booking
         5.Dashboard
         6.FAQ
         7.Home
         8.Login
         9.Orders
         10.OurTeam 
         11.Partnership
         12.PrivacyPolicy
         13.Product
         14.ReturnPolicy
         15.Setting
         16.ShipPolicy
         17.Signup
         18.Stats
         19.SubCategory
         20.Support
         21.TermPolicy
         22.Wallet



4.REDUX ->  Redux folder contains the directory where Redux-related code and files are 
            organized. Redux is a state management library commonly used in React applications.

  Redux contains:
              1.Api -> All the api related state management is managed here
              2.Billing ->  All the billing related things is managed here
              3.Location -> location finding logic is  there
              4.Product -> rendering and fetching  of  the products  are managed here
              5.Support -> All the helping related things is managed here
              6.User -> Verification of user is managed here
              7.Wallet -> All the payment related things are managed here


              
        
5.UTILS ->  This serves as a home for utility functions and helper modules. Describing the 
            "utils" folder involves highlighting its purpose, contents, and how it contributes to the overall organization and maintainability of the codebase.

  utils contain:
        1.async -> This file is used to fetch the image from the firebase/storage
        2.helper -> 
        3.map -> This helps to manage the location related things
        4.math -> this contains an function which round the values to the necceasry decimal 
                  value
        5.native -> This is used to load the script 
        6.object ->  This is used to compare the objects and eturn true or false
        7.sting
        8.validate -> This is used to verify the user input in the SignUp steps
        

