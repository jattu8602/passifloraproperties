# Facebook Authentication Setup Guide

This comprehensive guide will walk you through setting up Facebook OAuth authentication for your Next.js application with NextAuth v5.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step-by-Step Setup](#step-by-step-setup)
3. [Environment Configuration](#environment-configuration)
4. [Testing Your Setup](#testing-your-setup)
5. [Common Issues & Troubleshooting](#common-issues--troubleshooting)
6. [Security Best Practices](#security-best-practices)
7. [Production Deployment](#production-deployment)

## Prerequisites

- A Facebook account
- Access to your Next.js project
- Basic understanding of OAuth flows

## Step-by-Step Setup

### Step 1: Create a Meta Developer Account

1. **Visit the Meta for Developers website**
   - Go to [https://developers.facebook.com/](https://developers.facebook.com/)
   - Click "Get Started" or "Log In"

2. **Log in with your Facebook account**
   - Use your personal Facebook account credentials
   - Accept the Developer Terms and Conditions

3. **Complete your developer profile**
   - Fill in required information (name, email, phone)
   - Verify your email address if prompted

### Step 2: Create a New Facebook App

1. **Navigate to "My Apps"**
   - Click on "My Apps" in the top navigation
   - Click "Create App"

2. **Choose App Type**
   - Select **"Consumer"** for most web applications
   - Click "Next"

3. **Fill in App Details**
   - **App Name**: Enter your application name (e.g., "Passiflora Properties")
   - **App Contact Email**: Your email address
   - **App Purpose**: Select "Consumer" or "Business" as appropriate
   - Click "Create App"

4. **Complete Security Check**
   - Complete any security verification if prompted
   - Your app will be created and you'll see the App Dashboard

### Step 3: Configure Facebook Login

1. **Add Facebook Login Product**
   - In your App Dashboard, scroll down to "Add Products to Your App"
   - Find "Facebook Login" and click "Set Up"

2. **Choose Platform**
   - Select **"Web"** platform
   - Click "Next"

3. **Configure Site URL**
   - **Site URL**: Enter your development URL
     - Development: `http://localhost:3000`
     - Production: `https://yourdomain.com`
   - Click "Save"

### Step 4: Get Your App Credentials

1. **Navigate to App Settings**
   - In the left sidebar, click "Settings" → "Basic"

2. **Copy Your App ID**
   - **App ID** is your `FACEBOOK_CLIENT_ID`
   - Copy this value (it's a long number like `1234567890123456`)

3. **Get Your App Secret**
   - Click "Show" next to **App Secret**
   - **App Secret** is your `FACEBOOK_CLIENT_SECRET`
   - Copy this value (it's a long string like `abcdef1234567890abcdef1234567890`)

### Step 5: Configure OAuth Redirect URIs

1. **Go to Facebook Login Settings**
   - In the left sidebar, click "Facebook Login" → "Settings"

2. **Add Valid OAuth Redirect URIs**
   - **Valid OAuth Redirect URIs**: Add these URLs:
     - Development: `http://localhost:3000/api/auth/callback/facebook`
     - Production: `https://yourdomain.com/api/auth/callback/facebook`
   - Click "Save Changes"

3. **Configure Client OAuth Settings**
   - **Use Strict Mode for Redirect URIs**: Enable this for security
   - **Enforce HTTPS**: Enable for production

### Step 6: Configure App Permissions

1. **Go to App Review**
   - In the left sidebar, click "App Review" → "Permissions and Features"

2. **Request Basic Permissions**
   - **email**: User's email address (usually auto-approved)
   - **public_profile**: User's basic profile information (usually auto-approved)

3. **Advanced Permissions** (Optional)
   - Only request additional permissions if needed for your app
   - Most basic authentication only needs `email` and `public_profile`

## Environment Configuration

### Step 1: Update Your Environment Variables

Add these variables to your `.env.local` file:

```env
# Facebook OAuth Configuration
FACEBOOK_CLIENT_ID=your_app_id_here
FACEBOOK_CLIENT_SECRET=your_app_secret_here
```

### Step 2: Verify Your Configuration

Your `lib/auth.ts` should now include the Facebook provider:

```typescript
import Facebook from 'next-auth/providers/facebook'

export const { handlers, auth, signIn, signOut } = NextAuth({
  // ... other config
  providers: [
    // ... other providers
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
})
```

## Testing Your Setup

### Step 1: Test in Development Mode

1. **Start your development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

2. **Open your application**
   - Navigate to `http://localhost:3000`
   - Click the sign-in button to open the auth modal

3. **Test Facebook Login**
   - Click "Continue with Facebook"
   - You should be redirected to Facebook's login page
   - After logging in, you should be redirected back to your app

### Step 2: Verify User Data

Check that user data is being stored correctly:

1. **Check your database**
   - User record should be created in your `User` table
   - Account record should be created in your `Account` table with provider "facebook"

2. **Check the session**
   - User should be logged in and session should contain user information

## Common Issues & Troubleshooting

### Issue: "URL Blocked" Error

**Problem**: Facebook shows "URL Blocked" error when trying to sign in.

**Solution**:
- Check that your redirect URI is exactly: `http://localhost:3000/api/auth/callback/facebook`
- Ensure the URI is added to "Valid OAuth Redirect URIs" in Facebook Login settings
- Make sure there are no trailing slashes or extra characters

### Issue: "App Not Setup" Error

**Problem**: Facebook shows "App Not Setup" error.

**Solution**:
- Ensure Facebook Login product is added to your app
- Check that your app is in Development mode (for testing)
- Verify your App ID and App Secret are correct

### Issue: "Invalid OAuth" Error

**Problem**: NextAuth shows "Invalid OAuth" error.

**Solution**:
- Double-check your `FACEBOOK_CLIENT_ID` and `FACEBOOK_CLIENT_SECRET` in `.env.local`
- Ensure environment variables are loaded correctly
- Restart your development server after changing environment variables

### Issue: "App Review Required" Error

**Problem**: Facebook requires app review for certain permissions.

**Solution**:
- For basic authentication, you only need `email` and `public_profile` permissions
- These are usually auto-approved
- Avoid requesting additional permissions unless necessary

### Issue: Development vs Production URLs

**Problem**: App works in development but not in production.

**Solution**:
- Create separate Facebook apps for development and production
- Update redirect URIs for production domain
- Ensure production app is in Live mode (after review)

## Security Best Practices

### 1. Environment Variables
- **Never commit** `.env.local` to version control
- Use different apps for development and production
- Regularly rotate your App Secret

### 2. App Configuration
- Enable "Use Strict Mode for Redirect URIs"
- Enable "Enforce HTTPS" for production
- Keep your App Secret secure and never expose it in client-side code

### 3. Permissions
- Only request the minimum permissions needed
- Regularly audit requested permissions
- Remove unused permissions

### 4. Monitoring
- Monitor your app usage in the Meta Developer Dashboard
- Set up alerts for unusual activity
- Regularly review app analytics

## Production Deployment

### Step 1: Create Production App

1. **Create a new Facebook app** for production
2. **Configure production settings**:
   - Site URL: Your production domain
   - Valid OAuth Redirect URIs: `https://yourdomain.com/api/auth/callback/facebook`

### Step 2: Submit for App Review

1. **Go to App Review** in your production app
2. **Submit for review** if you need additional permissions
3. **Switch to Live mode** once approved

### Step 3: Update Environment Variables

Update your production environment variables:

```env
FACEBOOK_CLIENT_ID=your_production_app_id
FACEBOOK_CLIENT_SECRET=your_production_app_secret
```

### Step 4: Test Production

1. **Test the complete flow** in production
2. **Verify user data** is being stored correctly
3. **Monitor for any errors** in production logs

## Additional Resources

- [Facebook Login Documentation](https://developers.facebook.com/docs/facebook-login/web)
- [NextAuth.js Facebook Provider](https://authjs.dev/reference/core/providers/facebook)
- [Meta for Developers](https://developers.facebook.com/)
- [OAuth 2.0 Security Best Practices](https://tools.ietf.org/html/draft-ietf-oauth-security-topics)

## Support

If you encounter issues not covered in this guide:

1. Check the [Facebook Developer Community](https://developers.facebook.com/community/)
2. Review the [NextAuth.js Documentation](https://authjs.dev/)
3. Check your application logs for detailed error messages
4. Ensure all environment variables are correctly set

---

**Note**: This guide is specifically for Next.js applications using NextAuth v5. If you're using a different version or framework, some steps may vary.
