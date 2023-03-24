interface Run {
  gained_points: number;
  total_points: number;
  max_points?: number;
  comment: string | null;
}

interface Item {
  title: string;
  weight: number;
  runs: Record<string, Run>;
}

interface SubCategory {
  name: string;
  items: Record<string, Item>;
  gained_points: number;
  total_points: number;
  runs: Record<string, Run>;
}

interface Category {
  name: string;
  description: string | null;
  items: Record<string, Item>;
  gained_points: number;
  total_points: number;
  runs: Record<string, Run>;
  sub_categories: Record<string, SubCategory>;
}

interface Root {
  "Systems & navigation_Navigation_COLREGS": Category;
  Human: Category;
  "Internal/external": Category;
}

export default Root;

//Given json Data
// const data: Root = {
//     "Systems & navigation_Navigation_COLREGS": {
//       name: "Systems & navigation",
//       description:
//         "The performance of the candidate in relation to the vessel's systems and overall navigation.",
//       items: {},
//       gained_points: 11,
//       total_points: 21,
//       runs: { "1": { gained_points: 11, total_points: 21 } },
//       sub_categories: {
//         Navigation: {
//           name: "Navigation",
//           items: {
//             "Follows passage plan": {
//               title: "Follows passage plan",
//               weight: 1,
//               runs: {
//                 "1": {
//                   gained_points: 3,
//                   max_points: 3,
//                   comment: "I have a small comment about this",
//                 },
//               },
//             },
//             "Monitors COG, SOG, XTE, ETA": {
//               title: "Monitors COG, SOG, XTE, ETA",
//               weight: 2,
//               runs: {
//                 "1": {
//                   gained_points: 2,
//                   max_points: 3,
//                   comment: "Comment from Freek",
//                 },
//               },
//             },
//           },
//           gained_points: 7,
//           total_points: 9,
//           runs: { "1": { gained_points: 7, total_points: 9 } },
//         },
//         COLREGS: {
//           name: "COLREGS",
//           items: {
//             "COLREGS knowledge & application": {
//               title: "COLREGS knowledge & application",
//               weight: 4,
//               runs: { "1": { gained_points: 1, max_points: 3, comment: "" } },
//             },
//           },
//           gained_points: 4,
//           total_points: 12,
//           runs: { "1": { gained_points: 4, total_points: 12 } },
//         },
//       },
//     },
//     Human: {
//       name: "Human",
//       description: null,
//       items: {
//         Leadership: {
//           title: "Leadership",
//           weight: 1,
//           runs: {
//             "1": { gained_points: 3, max_points: 3, comment: null },
//             "2": { gained_points: 3, max_points: 3, comment: null },
//           },
//         },
//       },
//       gained_points: 6,
//       total_points: 6,
//       runs: {
//         "1": { gained_points: 3, total_points: 3 },
//         "2": { gained_points: 3, total_points: 3 },
//       },
//       sub_categories: {},
//     },
//     "Internal/external": {
//       name: "Internal/external",
//       description: null,
//       items: {
//         "Team management": {
//           title: "Team management",
//           weight: 1,
//           runs: { "2": { gained_points: 3, max_points: 3, comment: null } },
//         },
//         "Self-management": {
//           title: "Self-management",
//           weight: 3,
//           runs: { "2": { gained_points: 0, max_points: 3, comment: null } },
//         },
//       },
//       gained_points: 3,
//       total_points: 3,
//       runs: { "2": { gained_points: 3, total_points: 3 } },
//       sub_categories: {},
//     },
//   };
