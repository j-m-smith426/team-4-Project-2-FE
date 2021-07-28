import Amplify, { Auth } from "aws-amplify";

Amplify.configure({
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: "us-east-2:e190f765-a991-4132-a416-47d5d84ce194",

    // REQUIRED - Amazon Cognito Region
    region: "us-east-2",

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "us-east-2_nmZXgQv8F",

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: "76om4rfo91f4h4vhfmrsp7276r",

    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: "USER_PASSWORD_AUTH",
  },
  Storage: {
    AWSS3: {
      bucket: "scouter-revature-project1", //REQUIRED -  Amazon S3 bucket name
      region: "us-east-2",
    },
  },
});

// You can get the current config object
export const currentConfig = Auth.configure();
