import privacy from '../assets/images/privacy.png';
import Image from 'next/image';
import Faq from '../components/Faq';

export default function privacyPolicy() {
  return (
    <div className="mt-20 pt-10 pb-10 text-slate-50 my-0 mx-auto" style={{ maxWidth: '1200px' }}>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <h1 className="text-6xl font-bold mb-4">
              <span className="text-red-600">Marvel</span> Avatar Privacy Portal
            </h1>
            <p className="text-2xl text-yellow-500 mb-4">Our commitment to protecting your data</p>
            <p className="text-xl text-slate-200 mb-4">Welcome to our Privacy Portal.</p>
            <p className="text-xl text-slate-200 mb-4">
              We created this page to help you navigate through key aspects of our Privacy Program
              and learn more about your privacy rights.
            </p>
            <p className="text-xl text-slate-200 mb-4">
              At Marvel Avatar, we are dedicated to safeguarding your privacy and protecting your
              data. The security of your personal information is paramount to us and we follow
              strict internal guidelines, legal requirements and industry best practices to ensure
              that your data is secure and used only for authorized purposes.
            </p>
          </div>
          <div>
            <Image src="/privacy.png" width={500} height={500} alt="Picture of the author" />
          </div>
        </div>
      </div>
      <div className="mt-20 mb-20">
        <h2 className="text-5xl text-center mb-10 font-bold">Marvel Avatar's Privacy Principles</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-12 p-6">
          <div className="grid grid-cols-12 md:grid-cols-12 gap-1">
            <Image src="/eye.png" width={80} height={50} alt="eye" />
            <div className="col-span-11">
              <p className="text-2xl mb-2 text-yellow-500">Transparency at All Times</p>
              <p className="text-base text-slate-300">
                Our transparency commitment means that we keep you informed about how your data is
                used and shared. We update this portal and our privacy notices regularly, ensuring
                you stay informed about any changes that may affect you. This helps us empower you
                to make informed decisions about your data and privacy.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 md:grid-cols-12 gap-1">
            <Image src="/doc.png" width={80} height={50} alt="eye" />
            <div className="col-span-11">
              <p className="text-2xl mb-2 text-yellow-500">
                Data Minimization & Purpose Limitation
              </p>
              <p className="text-base text-slate-300">
                We have implemented strong governance controls on data minimization, which ensure
                that all products and services offered by Marvel Avatar only collect user data with
                specified purposes. We demonstrate in our Privacy Notice the specific, legitimate
                business purposes of data collection at Marvel Avatar.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 md:grid-cols-12 gap-1">
            <Image src="/accountability.png" width={80} height={50} alt="eye" />
            <div className="col-span-11">
              <p className="text-2xl mb-2 text-yellow-500">Accountability and Compliance</p>
              <p className="text-base text-slate-300">
                We take our privacy responsibilities seriously. Our practices are in full compliance
                with applicable data protection laws and regulations around the globe. We conduct
                regular audits and continuously improve our processes to ensure we uphold the
                highest standards of data protection and privacy. Our program has received coveted
                security and privacy certifications in multiple jurisdictions where we operate.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 md:grid-cols-12 gap-1">
            <Image src="/user.png" width={80} height={50} alt="eye" />
            <div className="col-span-11">
              <p className="text-2xl mb-2 text-yellow-500">User's Rights and Access</p>
              <p className="text-base text-slate-300">
                We recognize and uphold your fundamental rights concerning your personal data. To
                help you exercise them, we provide easy-to-use tools and mechanisms in the Marvel
                Avatar app and through a dedicated webform where you can request our support. For
                more information on the applicable rights for your jurisdiction, check our Privacy
                Notice at the link below. If you wish to exercise your rights, kindly read the
                section "Exercising your Privacy Rights" on this page.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 md:grid-cols-12 gap-1">
            <Image src="/data.png" width={80} height={50} alt="eye" />
            <div className="col-span-11">
              <p className="text-2xl mb-2 text-yellow-500">Data Security</p>
              <p className="text-base text-slate-300">
                We prioritize your privacy and security, implementing robust measures to protect
                your data from loss, misuse, or unauthorized access, while strictly controlling
                access internally. Our advanced encryption and stringent protocols, including
                identity verification, maintain the confidentiality and integrity of your data.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 md:grid-cols-12 gap-1">
            <Image src="/key.png" width={80} height={50} alt="eye" />
            <div className="col-span-11">
              <p className="text-2xl mb-2 text-yellow-500">Privacy by Design</p>
              <p className="text-base text-slate-300">
                We have strong processes in place to ensure that privacy and data protection are
                built into all our products and services. Our dedicated privacy team works closely
                with developers to incorporate data protection by design and by default, adhering to
                global standards and regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
}
