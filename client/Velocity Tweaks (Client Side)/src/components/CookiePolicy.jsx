import React from "react";

export default function CookiePolicy() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Cookie Policy</h2>
      <p>
        <strong>Effective Date:</strong> 26th August 2024
      </p>

      <p>Welcome to Velocity Tweaks!</p>

      <p>
        This Cookie Policy explains how we use cookies and similar technologies
        on our website. By using our website, you agree to the use of cookies as
        described in this policy.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">1. What Are Cookies?</h3>
      <p>
        Cookies are small text files that are stored on your device when you
        visit a website. They are used to remember your preferences, enhance
        your user experience, and track your interactions with the website.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        2. How We Use Cookies
      </h3>
      <p>We use cookies for the following purposes:</p>
      <ul className="list-disc list-inside ml-4">
        <li>
          <strong>Authentication:</strong> We use cookies to manage your login
          status when you sign in through Google. These cookies are essential
          for ensuring secure access to your account.
        </li>
        <li>
          <strong>Cart Functionality:</strong> We use local storage to store the
          state of your shopping cart. This ensures that your cart items are
          remembered as you navigate through our website.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        3. Third-Party Cookies
      </h3>
      <p>
        We use third-party cookies from Google for authentication purposes.
        These cookies are managed by Google and are used to facilitate your
        login to our website.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">4. Managing Cookies</h3>
      <p>
        You can control and manage cookies through your browser settings. Most
        browsers allow you to block or delete cookies, but please note that
        disabling cookies may affect your ability to use certain features of our
        website, such as Google authentication and maintaining your shopping
        cart state.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">
        5. Changes to This Cookie Policy
      </h3>
      <p>
        We may update our Cookie Policy from time to time to reflect changes in
        our practices or for other operational, legal, or regulatory reasons.
        Any changes will be posted on this page, and your continued use of our
        website constitutes your acceptance of the updated policy.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h3>
      <p>
        If you have any questions about our Cookie Policy, please contact us at{" "}
        <a href="mailto:velocitytweaks@gmail.com" className="underline">
          velocitytweaks@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
