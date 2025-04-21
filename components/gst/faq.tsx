const FAQ = () => (
  <section className="py-16 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white">
    <h2 className="text-4xl text-center font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent dark:text-transparent">
      Frequently Asked Questions
    </h2>
    <div className="max-w-4xl mx-auto">
      {[
        {
          question: "How to revise GST returns?",
          answer:
            "GST returns can be revised within the time limit specified under the GST law. The process of revising GST returns is similar to filing a fresh return, except that the taxpayer has to mention the reference number of the original return.",
        },
        {
          question: "What documents are needed for audit?",
          answer:
            "The documents required for GST audit vary depending on the type of audit. However, some common documents that are usually required include the GST registration certificate, copies of GST returns, invoices, credit notes, debit notes, and any other relevant documents.",
        },
        {
          question: "Can I file nil returns via SMS?",
          answer:
            "Yes, nil GST returns can be filed via SMS. The taxpayer needs to send an SMS to the specified number with the return period and the word 'NIL' in the message body.",
        },
      ].map(({ question, answer }, index) => (
        <details
          key={index}
          className="mb-4 p-4 bg-slate-300 mx-5 dark:bg-slate-800 rounded-lg border border-slate-600 dark:border-slate-700"
        >
          <summary className="font-semibold cursor-pointer dark:text-white">
            {question}
          </summary>
          <p className="text-gray-700 dark:text-gray-400 mt-2">{answer}</p>
        </details>
      ))}
    </div>
  </section>
);

export default FAQ;
