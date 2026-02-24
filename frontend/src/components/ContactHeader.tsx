

export default function ContactHeader() {
  return (
    <div className="bg-gray-100 border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-3 flex justify-between items-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
        {/* Call Button */}
        <div className="flex items-center group relative flex-1 min-w-[140px] sm:flex-none">
          <a
            href="tel:+919036289719"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-6 rounded-lg inline-flex items-center gap-1 sm:gap-2 transition-all duration-300 transform hover:scale-110 text-sm sm:text-base whitespace-nowrap w-full sm:w-auto justify-center"
            title="Click to call"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">Call</span>
          </a>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs sm:text-sm py-1 px-2 sm:px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
            Click to call
          </span>
        </div>

        {/* WhatsApp Button */}
        <div className="flex items-center group relative flex-1 min-w-[140px] sm:flex-none">
          <a
            href="https://wa.me/919036289719"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-6 rounded-lg inline-flex items-center gap-1 sm:gap-2 transition-all duration-300 transform hover:scale-110 text-sm sm:text-base whitespace-nowrap w-full sm:w-auto justify-center"
            title="Click to send message"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.6915026,13.4744748 C17.4714405,13.3378151 16.1908841,12.5609256 15.9625724,12.4868852 C15.7326758,12.4122274 15.5589604,12.3758921 15.3837622,12.5972961 C15.2074989,12.8203722 14.7694502,13.4272231 14.6006844,13.6067695 C14.4319186,13.7847306 14.2625514,13.8115751 14.0424893,13.6750154 C13.8224272,13.5378729 13.1694181,13.3053501 12.3788957,12.5853302 C11.7616891,12.0282856 11.3564034,11.334 11.1884865,11.1075269 C11.0195487,10.8809625 11.1719456,10.7272262 11.3066444,10.5896734 C11.4275078,10.4685899 11.5753555,10.2710969 11.7095346,10.1031028 C11.8437137,9.93513877 11.8910027,9.80913974 12.0134821,9.63090207 C12.1365539,9.45328013 12.0887397,9.28581126 11.9990147,9.14864774 C11.9108827,9.01313482 11.5046068,7.72560096 11.2944022,7.2018063 C11.0899756,6.71045276 10.8805039,6.78514862 10.7214068,6.77308118 C10.5695176,6.76131449 10.3971682,6.76043767 10.2220485,6.76043767 C10.0469288,6.76043767 9.74076326,6.83620714 9.51117143,7.05956716 C9.28170019,7.28422224 8.64998357,7.91314525 8.64998357,9.2006477 C8.64998357,10.4881501 9.53267994,11.7326888 9.66648913,11.9107446 C9.80029832,12.0888004 11.3524484,14.7374074 13.8377216,15.8104408 C14.4103881,16.0793639 14.8563841,16.2462262 15.1947898,16.3651772 C15.7667927,16.5585068 16.2893566,16.5286027 16.7067019,16.4642487 C17.175735,16.3926173 18.1342891,15.8761579 18.3451769,15.3052592 C18.556065,14.7343605 18.556065,14.2622181 18.4671127,14.1360714 C18.3792435,14.0095821 18.2024267,13.9403979 17.6915026,13.4744748 M12.0038577,2.39794792 C6.44882329,2.39794792 1.99926741,6.84750365 1.99926741,12.4025365 C1.99926741,14.1399899 2.45175348,15.7809281 3.2744179,17.1976576 L2.3916387,20.4371347 C2.19218622,21.080351 2.77329783,21.6614627 3.41651416,21.4620097 L6.78239761,20.5523148 C8.18718766,21.3429818 9.83428676,21.7985771 11.5851315,21.7985771 C17.1401659,21.7985771 21.5897218,17.3490214 21.5897218,11.7949885 C21.5897218,6.24093953 17.1401659,2.39794792 12.0038577,2.39794792" />
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs sm:text-sm py-1 px-2 sm:px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
            Click to message
          </span>
        </div>

        {/* Email Button */}
        <div className="flex items-center group relative flex-1 min-w-[140px] sm:flex-none">
          <a
            href="mailto:admin@ambemarketing.com"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-6 rounded-lg inline-flex items-center gap-1 sm:gap-2 transition-all duration-300 transform hover:scale-110 text-sm sm:text-base whitespace-nowrap w-full sm:w-auto justify-center"
            title="Click to email"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="hidden sm:inline">Email</span>
          </a>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs sm:text-sm py-1 px-2 sm:px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
            Click to email
          </span>
        </div>
      </div>
    </div>
  );
}
