# GitHub Authentication Setup Guide

This comprehensive guide will walk you through setting up GitHub OAuth authentication for your Next.js application with NextAuth v5.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step-by-Step Setup](#step-by-step-setup)
3. [Environment Configuration](#environment-configuration)
4. [Testing Your Setup](#testing-your-setup)
5. [Common Issues & Troubleshooting](#common-issues--troubleshooting)
6. [Security Best Practices](#security-best-practices)
7. [Production Deployment](#production-deployment)

## Prerequisites

- A GitHub account
- Access to your Next.js project
- Basic understanding of OAuth flows

## Step-by-Step Setup

### Step 1: Create a GitHub OAuth App

1. **Log in to GitHub**
   - Go to [https://github.com](https://github.com)
   - Log in with your GitHub account

2. **Navigate to Developer Settings**
   - Click your profile picture in the top-right corner
   - Select "Settings" from the dropdown menu
   - In the left sidebar, click "Developer settings"

3. **Create a New OAuth App**
   - Click "OAuth Apps" in the left sidebar
   - Click "New OAuth App" button

### Step 2: Configure Your OAuth App

1. **Fill in Application Details**
   - **Application name**: Enter your application name (e.g., "Passiflora Properties")
   - **Homepage URL**: Your application's homepage
     - Development: `http://localhost:3000`
     - Production: `https://yourdomain.com`
   - **Application description**: Brief description of your app (optional)
   - **Authorization callback URL**: This is crucial for NextAuth
     - Development: `http://localhost:3000/api/auth/callback/github`
     - Production: `https://yourdomain.com/api/auth/callback/github`

2. **Register the Application**
   - Click "Register application"
   - You'll be redirected to your new OAuth app's page

### Step 3: Get Your OAuth Credentials

1. **Copy Your Client ID**
   - **Client ID** is your `GITHUB_CLIENT_ID`
   - It's visible on the app page (e.g., `Iv1.8a61f9b3a7aba766`)

2. **Generate Client Secret**
   - Click "Generate a new client secret"
   - **Client Secret** is your `GITHUB_CLIENT_SECRET`
   - Copy this value immediately (you won't be able to see it again)
   - It looks like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0`

3. **Save Your Credentials**
   - Store these values securely
   - You'll need them for your environment variables

### Step 4: Configure OAuth App Settings

1. **Update Application Settings** (if needed)
   - You can modify the homepage URL and callback URL later
   - Click "Update application" after making changes

2. **Verify Callback URL**
   - Ensure the callback URL exactly matches:
     - Development: `http://localhost:3000/api/auth/callback/github`
     - Production: `https://yourdomain.com/api/auth/callback/github`

## Environment Configuration

### Step 1: Update Your Environment Variables

Add these variables to your `.env.local` file:

```env
# GitHub OAuth Configuration
GITHUB_CLIENT_ID=your_client_id_here
GITHUB_CLIENT_SECRET=your_client_secret_here
```

### Step 2: Verify Your Configuration

Your `lib/auth.ts` should now include the GitHub provider:

```typescript
import GitHub from 'next-auth/providers/github'

export const { handlers, auth, signIn, signOut } = NextAuth({
  // ... other config
  providers: [
    // ... other providers
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
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

3. **Test GitHub Login**
   - Click "Continue with GitHub"
   - You should be redirected to GitHub's authorization page
   - After authorizing, you should be redirected back to your app

### Step 2: Verify User Data

Check that user data is being stored correctly:

1. **Check your database**
   - User record should be created in your `User` table
   - Account record should be created in your `Account` table with provider "github"

2. **Check the session**
   - User should be logged in and session should contain user information
   - GitHub provides: `id`, `name`, `email`, `image` (avatar URL)

## Common Issues & Troubleshooting

### Issue: "Application error" or "redirect_uri_mismatch"

**Problem**: GitHub shows "Application error" or "redirect_uri_mismatch" error.

**Solution**:
- Check that your callback URL is exactly: `http://localhost:3000/api/auth/callback/github`
- Ensure there are no trailing slashes or extra characters
- Verify the URL in your GitHub OAuth app settings matches exactly

### Issue: "Invalid client" Error

**Problem**: NextAuth shows "Invalid client" error.

**Solution**:
- Double-check your `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` in `.env.local`
- Ensure environment variables are loaded correctly
- Restart your development server after changing environment variables
- Verify the client secret is correct (regenerate if needed)

### Issue: "Bad credentials" Error

**Problem**: GitHub API returns "Bad credentials" error.

**Solution**:
- Check that your client secret is correct
- Regenerate the client secret if you're unsure
- Ensure there are no extra spaces or characters in your environment variables

### Issue: "Not found" Error

**Problem**: GitHub shows "Not found" error.

**Solution**:
- Verify your client ID is correct
- Check that your OAuth app is properly configured
- Ensure you're using the correct GitHub domain (github.com, not enterprise)

### Issue: Development vs Production URLs

**Problem**: App works in development but not in production.

**Solution**:
- Create separate GitHub OAuth apps for development and production
- Update callback URLs for production domain
- Ensure production environment variables are set correctly

## Security Best Practices

### 1. Environment Variables
- **Never commit** `.env.local` to version control
- Use different OAuth apps for development and production
- Regularly rotate your client secret

### 2. OAuth App Configuration
- Use HTTPS for production callback URLs
- Keep your client secret secure and never expose it in client-side code
- Regularly review and audit your OAuth app permissions

### 3. Permissions
- GitHub OAuth apps have minimal permissions by default
- Only request additional scopes if absolutely necessary
- Regularly audit what data your app accesses

### 4. Monitoring
- Monitor your OAuth app usage in GitHub settings
- Set up alerts for unusual activity
- Regularly review app analytics

## Production Deployment

### Step 1: Create Production OAuth App

1. **Create a new OAuth app** for production
2. **Configure production settings**:
   - Homepage URL: Your production domain
   - Authorization callback URL: `https://yourdomain.com/api/auth/callback/github`

### Step 2: Update Environment Variables

Update your production environment variables:

```env
GITHUB_CLIENT_ID=your_production_client_id
GITHUB_CLIENT_SECRET=your_production_client_secret
```

### Step 3: Test Production

1. **Test the complete flow** in production
2. **Verify user data** is being stored correctly
3. **Monitor for any errors** in production logs

## GitHub OAuth Scopes

By default, GitHub OAuth provides these scopes:

- **user:email**: Access to user's email address
- **read:user**: Access to user's basic profile information

### Additional Scopes (if needed)

If you need additional permissions, you can configure them in your OAuth app:

- **user:follow**: Access to user's followers
- **public_repo**: Access to public repositories
- **repo**: Access to all repositories (use with caution)

**Note**: Most applications only need the default scopes for basic authentication.

## GitHub Enterprise

If you're using GitHub Enterprise:

1. **Use your enterprise domain** instead of github.com
2. **Configure the provider** with your enterprise URL:
   ```typescript
   GitHub({
     clientId: process.env.GITHUB_CLIENT_ID!,
     clientSecret: process.env.GITHUB_CLIENT_SECRET!,
     issuer: "https://your-enterprise-github.com",
   })
   ```

## Additional Resources

- [GitHub OAuth Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [NextAuth.js GitHub Provider](https://authjs.dev/reference/core/providers/github)
- [GitHub Developer Settings](https://github.com/settings/developers)
- [OAuth 2.0 Security Best Practices](https://tools.ietf.org/html/draft-ietf-oauth-security-topics)

## Support

If you encounter issues not covered in this guide:

1. Check the [GitHub Developer Community](https://github.community/)
2. Review the [NextAuth.js Documentation](https://authjs.dev/)
3. Check your application logs for detailed error messages
4. Ensure all environment variables are correctly set
5. Verify your OAuth app configuration in GitHub settings

---

**Note**: This guide is specifically for Next.js applications using NextAuth v5. If you're using a different version or framework, some steps may vary.

## Quick Reference

### Environment Variables
```env
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
```

### Callback URLs
- Development: `http://localhost:3000/api/auth/callback/github`
- Production: `https://yourdomain.com/api/auth/callback/github`

### Default Scopes
- `user:email` - User's email address
- `read:user` - User's basic profile information
