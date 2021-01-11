import portrait from 'src/pages/DavidPage/DavidPortrait.jpg'
// import cand
//   class Candidates extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = { Candidates: [
//     {Name:"David",
//      Bio: "hgfhjgfhjgfhgfhgdfhgd",
//      Vision: "web\src\pages\DavidPage\David.jpg",
//      Portrait: "web\src\pages\DavidPage\David.jpg"
//   },
//     { Name: "Maureen",
//       Bio:'aaaaaa',
//       Vision: 'aaaaaaaaaa',
//       Portrait: '      '
//     },
//     { Name: "Matt",
//       Bio:'bbbbbb',
//       Vision: 'bbbbbbbb',
//       Portrait: '      '
//     },
//     { Name: "Ms X",
//       Bio:'aaaaaa',
//       Vision: 'aaaaaaaaaa',
//       Portrait: '      '
//     },
//   ]
// }

//   //
const CanddescLayout = ({ children }) => {
  return(
  <>
  {children}
    <div className="bg-white">
  <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
    <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      <div className="space-y-5 sm:space-y-4">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Meet David</h2>
        <p className="text-xl leading-7 text-gray-500">The Shire has been my home since 1988
I have had many roles in the Eurobodalla Community including:
Shire Council --  Established and  led the Community Services Division in Council -1988-1994
Small business owner – Smiths Music Batemans Bay  2001-2006
Political Activist – GetUp Coordinator Eden Monaro 2007
Community Involvement – Secretary Broulee Community Association 2001-2006
State Government – Child Protection Caseworker 2010-2015 & 2017-2018
Non-government organisations – 	Anglicare Homelessness Services 2009-2010
Anglicare Cassies Nest Trauma Counselling Service 2019
Board member IMPACT Eurobodalla
</p>
      </div>
      <div className="lg:col-span-2">
        <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
          <li className="sm:py-8">
            <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
              {/*<!-- Image -->*/}
              <div className="relative pb-2/3 sm:pt-2/3">
                <img className=" inset-100 object-cover h-full w-full shadow-lg rounded-lg" src={portrait} alt=""></img>
              </div>
              <div className="sm:col-span-2">
                <div className="space-y-4">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h4>David Grace</h4>
                    <p className="text-indigo-600">Broulee</p>
                  </div>
                  <div className="text-lg leading-7">
                  <h4>My Vision </h4>
                   </div> <h4 className="text-gray-500">
<ul>

<li>•	work with local people and other governments to  build a sustainable local economy based on emerging technology we can proudly hand down to our children and grandchildren - that includes nurturing small businesses and local industry which enhances our living environment.</li>
<li>•	Honour the land we live on that has been cared for so well by first peoples for tens of thousands of years.</li>
<li>•	Represent the people rather than be a handmaiden to business. Progressive Councillors will advocate for the Shire when powerful interests such as Federal & State Governments and big business work against us</li>
<li>•	Make sure we keep our Shire as an attractive tourist destination- clean beaches; lots of forest and wilderness; thriving small businesses.</li>
<li>•	Serve the voiceless & powerless by providing services and facilities that respect them and increase their ability to act on their own behalf.</li>
</ul>
                  </h4></div>
                  <ul className="flex space-x-5">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

          {/*<!-- More people...-->*/}
        </ul>
      </div>
    </div>
  </div>
</div>
  </>
)}
//  }
    // }
export default CanddescLayout
