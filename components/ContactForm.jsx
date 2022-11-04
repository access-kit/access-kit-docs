export const ContactForm = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-6/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mt-6 mb-6 shadow-lg rounded bg-blueGray-200">
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl font-semibold">
              Want to work with us?
            </h4>
            <p className="leading-relaxed mt-1 mb-4 text-blueGray-600 text-lg">
              We're excited to hear about your accessibility and AV projects!
            </p>
            <p className="leading-relaxed mt-1 mb-4 text-blueGray-600 text-lg">
              Please email us at <a href="mailto:info@accesskit.cc" target="_blank" rel="noreferrer" className="font-bold">info@accesskit.cc</a>,
              and we'll be happy to provide you with a demo, price sheet, and a free consultantion.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
