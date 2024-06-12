import { Accordion } from './Accordian';

const faqs = [
  {
    id: 1,
    question: 'What rights do I have?',
    answer:
      'Our global privacy framework is inspired by the European Union’s General Data Protection Regulation (GDPR), which is widely considered one of the strictest and most comprehensive frameworks globally. A big part of our users hold several key rights.',
  },
  {
    id: 2,
    question: 'What support does Etherium offer to help me exercise my rights?',
    answer:
      'We offer you a webform designed to facilitate the exercise of your privacy rights. Depending on your specific association with our organization (such as Customer, Former Employee, or Candidate), we may require certain data to identify you and to process your request effectively. This includes specifying your country of residence to ensure compliance with local privacy rights, as well as providing your name and email address for identification purposes. Additionally, Etherium UID is required for customers to enable account identification. Once this information is provided, just select the relevant privacy right you wish to exercise and submit your request to us.',
  },
  {
    id: 3,
    question: 'Check our Privacy Notice',
    answer: `If you want to access our Privacy Notice, please check out out privacy policy page.`,
  },
  {
    id: 4,
    question: 'Can I request the deletion of my data?',
    answer:
      'Privacy laws grant you rights, including the right to the deletion of your personal data. However, these rights are subject to limitations. While we respect your right to data deletion, legal and regulatory requirements compel us to retain certain information, such as financial transaction details, and information related to identity verification processes, and anti-money laundering measures, for a specified period. That said, we are happy to accommodate any user request for the deletion of any of your personal data that is not explicitly required to be kept under applicable laws. This typically includes information used for marketing purposes or data related to any additional services you may have chosen to use.',
  },
];
export default function Faq() {
  return (
    <div className="container mx-auto mb-16" data-accordion="open">
      <h1 className="text-center text-5xl font-bold mb-10 text-slate-300">FAQ's</h1>
      {faqs.map((faq) => (
        <Accordion key={faq.id} faq={faq} />
      ))}
    </div>
  );
}
