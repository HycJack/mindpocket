import { twoFactorClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  plugins: [
    twoFactorClient({
      // 登录时若账号已启用 2FA，重定向到验证页
      onTwoFactorRedirect: () => {
        window.location.href = "/two-factor"
      },
    }),
  ],
})

export const { signIn, signOut, signUp, useSession, twoFactor } = authClient
