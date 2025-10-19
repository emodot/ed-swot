import React from "react";
import LegalLayout from "../components/LegalLayout";
import termsBg from "../assets/images/terms-bg.jpg";

export default function TermsAndConditions() {
return (
  <LegalLayout title="Terms And Conditions" bgImage={termsBg}>
    <section className="space-y-[32px]">
      {/* --- Section 1 --- */}
      <div>
        <h2 className="font-albra_sans_sb text-18 mb-[12px] text-brand_secondary">
          1. Your Account and Responsibilities
        </h2>
        <p className="mb-[16px]">
          You are responsible for maintaining the confidentiality of your
          account credentials and for restricting access to your account. You
          agree to accept responsibility for all activities that occur under
          your account or password. You must ensure that all the information you
          provide to us is accurate, complete, and current at all times. Failure
          to do so constitutes a breach of these Terms, which may result in
          immediate termination of your account on our Service.
        </p>
        <p>
          You must not use the Services in any manner that could damage,
          disable, overburden, or impair them or interfere with any other
          party’s use. You agree not to attempt to gain unauthorized access to
          any portion or feature of the Services or any systems or networks
          connected to them.
        </p>
      </div>

      {/* --- Section 2 --- */}
      <div>
        <h2 className="font-albra_sans_sb text-18 mb-[12px] text-brand_secondary">
          2. User Content on the Services
        </h2>
        <p className="mb-[16px]">
          Users may upload, post, or otherwise share content (collectively,
          “User Content”) while using the Services. You retain all rights in,
          and are solely responsible for, the User Content you post. However, by
          submitting User Content, you grant us a worldwide, non-exclusive,
          royalty-free, transferable, and sublicensable license to use,
          reproduce, modify, distribute, and display such content as necessary
          to operate and improve the Services.
        </p>
        <p>
          You affirm that you own or have the necessary rights and permissions
          to grant the above license and that your User Content does not
          infringe, misappropriate, or violate any third party’s intellectual
          property rights, privacy, or other proprietary rights.
        </p>
      </div>

      {/* --- Section 3 --- */}
      <div>
        <h2 className="font-albra_sans_sb text-18 mb-[12px] text-brand_secondary">
          3. Rights and Ownership
        </h2>
        <p className="mb-[16px]">
          All content, features, and functionality (including but not limited to
          text, graphics, logos, icons, images, video, audio, and software) are
          owned by or licensed to us and are protected by copyright, trademark,
          and other intellectual property laws. You may not reproduce,
          distribute, modify, create derivative works of, publicly display, or
          commercially exploit any portion of the Services without our prior
          written permission.
        </p>
        <p>
          We reserve all rights not expressly granted to you in these Terms. No
          right, title, or interest in or to the Services or any content therein
          is transferred to you, and all rights are reserved by the Company.
        </p>
      </div>

      {/* --- Section 4 --- */}
      <div>
        <h2 className="font-albra_sans_sb text-18 mb-[12px] text-brand_secondary">
          4. Termination
        </h2>
        <p>
          We may suspend or terminate your access immediately, without prior
          notice or liability, if you breach the Terms or engage in any activity
          that may harm the Services or other users. Upon termination, your
          right to use the Services will cease immediately. All provisions which
          by their nature should survive termination (such as ownership,
          indemnity, and limitations of liability) will remain in effect.
        </p>
      </div>

      {/* --- Section 5 --- */}
      <div>
        <h2 className="font-albra_sans_sb text-18 mb-[12px] text-brand_secondary">
          5. Transfer and Processing of Data
        </h2>
        <p>
          We may process and transfer data, including personal information,
          across borders to servers or databases located in countries other than
          your own. By using the Services, you consent to the processing and
          transfer of such data in accordance with our Privacy Policy and
          applicable law.
        </p>
      </div>

      {/* --- Section 6 --- */}
      <div>
        <h2 className="font-albra_sans_sb text-18 mb-[12px] text-brand_secondary">
          6. Indemnification
        </h2>
        <p>
          You agree to defend, indemnify, and hold harmless the Company, its
          affiliates, officers, directors, employees, and agents from and
          against any and all claims, damages, obligations, losses, liabilities,
          and expenses arising from (a) your use of the Services, (b) your
          violation of these Terms, or (c) your violation of any rights of a
          third party.
        </p>
      </div>

      {/* --- Section 7 --- */}
      <div>
        <h2 className="font-albra_sans_sb text-18 mb-[12px] text-brand_secondary">
          7. Disclaimers — “As Is” Basis
        </h2>
        <p>
          The Services are provided on an “as is” and “as available” basis,
          without any warranties of any kind. We do not guarantee that the
          Services will always be secure, error-free, or operate without
          interruption. To the fullest extent permitted by law, we disclaim all
          warranties, whether express or implied, including but not limited to
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </div>

      {/* --- Section 8 --- */}
      <div>
        <h2 className="font-albra_sans_sb text-18 mb-[12px] text-brand_secondary">
          8. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, in no event shall the Company
          or its affiliates be liable for any indirect, incidental,
          consequential, special, or punitive damages, including without
          limitation, loss of profits, data, use, goodwill, or other intangible
          losses, resulting from (a) your access to or use of the Services; (b)
          any unauthorized access or use of our servers; (c) any bugs, viruses,
          or other harmful code transmitted to or through the Services; or (d)
          any errors or omissions in content.
        </p>
      </div>

      {/* --- Section 9 --- */}
      <div>
        <h2 className="font-albra_sans_sb text-18 mb-[12px] text-brand_secondary">
          9. Resolving Disputes and Arbitration
        </h2>
        <p>
          Any dispute arising out of or relating to these Terms or the Services
          shall be resolved through binding arbitration conducted in accordance
          with applicable arbitration rules. The arbitration shall take place in
          your country of residence or another mutually agreed location, and the
          language shall be English. The arbitrator’s decision shall be final
          and binding.
        </p>
      </div>

      {/* --- Section 10 --- */}
      <div>
        <h2 className="font-albra_sans_sb text-18 mb-[12px] text-brand_secondary">
          10. Governing Law and Venue
        </h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of your jurisdiction, without regard to its conflict of law
          provisions. Any disputes arising under these Terms shall be subject to
          the exclusive jurisdiction of the courts located in your region.
        </p>
      </div>

      {/* --- Section 11 --- */}
      <div>
        <h2 className="font-albra_sans_sb text-18 mb-[12px] text-brand_secondary">
          11. Amendments
        </h2>
        <p>
          We may revise these Terms at any time by posting an updated version on
          our website. Your continued use of the Services after any such changes
          constitute acceptance of the revised Terms. We encourage you to review
          these Terms periodically for updates.
        </p>
      </div>

      {/* --- Section 12 --- */}
      <div>
        <h2 className="font-albra_sans_sb text-18 mb-[12px] text-brand_secondary">
          12. Severability
        </h2>
        <p>
          If any provision of these Terms is held invalid or unenforceable, the
          remaining provisions will remain in full force and effect. The invalid
          provision shall be replaced by a valid one that most closely reflects
          the original intent.
        </p>
      </div>

      {/* --- Section 13 --- */}
      <div>
        <h2 className="font-albra_sans_sb text-18 mb-[12px] text-brand_secondary">
          13. Miscellaneous
        </h2>
        <p>
          These Terms constitute the entire agreement between you and the
          Company regarding the Services and supersede any prior agreements. No
          waiver of any term shall be deemed a further or continuing waiver of
          such term or any other, and our failure to enforce any right or
          provision shall not constitute a waiver of such right or provision.
        </p>
      </div>
    </section>
  </LegalLayout>
);
}
