// import React from 'react';

// function Header(props) {
//   const { currentPage, handlePageChange } = props;

//   return (
//     <header>
//       <ul className="nav nav-tabs">
//         {/* Kinder Tabs */}
//         <li className="nav-item">
//           <a
//             href="#Kinder"
//             onClick={() => handlePageChange('Kinder')}
//             className={currentPage === 'Kinder' ? 'nav-link active' : 'nav-link'}
//           >
//             Kinder
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#1st"
//             onClick={() => handlePageChange('1st')}
//             className={currentPage === '1st' ? 'nav-link active' : 'nav-link'}
//           >
//             1st
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#2nd"
//             onClick={() => handlePageChange('2nd')}
//             className={currentPage === '2nd' ? 'nav-link active' : 'nav-link'}
//           >
//             2nd
//           </a>
//         </li>

//         {/* Grade Level Tabs */}
//         <li className="nav-item">
//           <a
//             href="#Grade level"
//             onClick={() => handlePageChange('Grade level')}
//             className={currentPage === 'Grade level' ? 'nav-link active' : 'nav-link'}
//             style={{ fontSize: '32px' }} // Increase the font size to 32px
//           >
//             Grade
//           </a>
//           {currentPage === 'Grade level' && (
//             <ul className="sub-tabs">
//               <li className="nav-item">
//                 <a
//                   href="#Kinder-1"
//                   onClick={() => handlePageChange('Kinder-1')}
//                   className={currentPage === 'Kinder-1' ? 'nav-link active' : 'nav-link'}
//                 >
//                   Kinder 1
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   href="#Kinder-2"
//                   onClick={() => handlePageChange('Kinder-2')}
//                   className={currentPage === 'Kinder-2' ? 'nav-link active' : 'nav-link'}
//                 >
//                   Kinder 2
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   href="#Kinder-3"
//                   onClick={() => handlePageChange('Kinder-3')}
//                   className={currentPage === 'Kinder-3' ? 'nav-link active' : 'nav-link'}
//                 >
//                   Kinder 3
//                 </a>
//               </li>
//               {/* Add more sub-tabs for other grade levels */}
//             </ul>
//           )}
//         </li>
//       </ul>
//     </header>
//   );
// }

// export default navTabs;
