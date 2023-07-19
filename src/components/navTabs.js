// import React from 'react';
// import title from '../../src/components/images/title image.png';

// function NavTabs({ currentPage, handlePageChange }) {
//   return (
//     <nav className="App-navTabs">
//       <img src={title} className="App-title" alt="title" />
//       <div className="navTabs-container">
//         <ul className="nav nav-tabs">
//           {/* Grade Level Tabs */}
//           <li className="nav-item">
//             <a
//               href="#home"
//               onClick={() => handlePageChange('home')}
//               className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
//             >
//               Kinder
//             </a>
//             {currentPage === 'Kinder' && (
//               <ul className="sub-links">
//                 <li>
//                   <a href="#teacher1" onClick={() => handlePageChange('teacher1')}>
//                     Teacher 1
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#teacher2" onClick={() => handlePageChange('teacher2')}>
//                     Teacher 2
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#teacher3" onClick={() => handlePageChange('teacher3')}>
//                     Teacher 3
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="nav-item">
//             <a
//               href="#1st"
//               onClick={() => handlePageChange('1st')}
//               className={currentPage === '1st' ? 'nav-link active' : 'nav-link'}
//             >
//               1st
//             </a>
//             {/* Add sub-links for 1st grade */}
//             {currentPage === '1st' && (
//               <ul className="sub-links">
//                 <li>
//                   <a href="#teacher4" onClick={() => handlePageChange('teacher4')}>
//                     Teacher 4
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#teacher5" onClick={() => handlePageChange('teacher5')}>
//                     Teacher 5
//                   </a>
//                 </li>
//                 {/* Add more sub-links for 1st grade */}
//               </ul>
//             )}
//           </li>
//           <li className="nav-item">
//             <a
//               href="#2nd"
//               onClick={() => handlePageChange('2nd')}
//               className={currentPage === '2nd' ? 'nav-link active' : 'nav-link'}
//             >
//               2nd
//             </a>
//             {/* Add sub-links for 2nd grade */}
//             {currentPage === '2nd' && (
//               <ul className="sub-links">
//                 <li>
//                   <a href="#teacher6" onClick={() => handlePageChange('teacher6')}>
//                     Teacher 6
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#teacher7" onClick={() => handlePageChange('teacher7')}>
//                     Teacher 7
//                   </a>
//                 </li>
//                 {/* Add more sub-links for 2nd grade */}
//               </ul>
//             )}
//           </li>
//           <li className="nav-item">
//             <a
//               href="#3rd"
//               onClick={() => handlePageChange('3rd')}
//               className={currentPage === '3rd' ? 'nav-link active' : 'nav-link'}
//             >
//               3rd
//             </a>
//             {/* Add sub-links for 3rd grade */}
//             {currentPage === '3rd' && (
//               <ul className="sub-links">
//                 <li>
//                   <a href="#teacher8" onClick={() => handlePageChange('teacher8')}>
//                     Teacher 8
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#teacher9" onClick={() => handlePageChange('teacher9')}>
//                     Teacher 9
//                   </a>
//                 </li>
//                 {/* Add more sub-links for 3rd grade */}
//               </ul>
//             )}
//           </li>
//           {/* Add other grade level tabs similarly */}
//           <li className="nav-item">
//             <a
//               href="#4th"
//               onClick={() => handlePageChange('4th')}
//               className={currentPage === '4th' ? 'nav-link active' : 'nav-link'}
//             >
//               4th
//             </a>
//             {/* Add sub-links for 4th grade */}
//             {currentPage === '4th' && (
//               <ul className="sub-links">
//                 <li>
//                   <a href="#teacher10" onClick={() => handlePageChange('teacher10')}>
//                     Teacher 10
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#teacher11" onClick={() => handlePageChange('teacher11')}>
//                     Teacher 11
//                   </a>
//                 </li>
//                 {/* Add more sub-links for 4th grade */}
//               </ul>
//             )}
//           </li>
//           {/* Add other grade level tabs similarly */}
//           {/* ... */}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default NavTabs;
