// const categoryController = {
//     showCategories(req, res) {
//         const categories = ['labs', 'Category2', 'Category3', 'Category4','Category5','Category6','Category7','Category8'];
//         res.render('categories', { categories });
//     }
// };

// module.exports = categoryController;

// Define the fixed categories
const categories = [
    "Labs",
    "AdministrationBlock",
    "Sports",
    "ExaminationBranch",
    "Cafeteria",
    "Library",
    "PlacementCell",
    "Infra"
];

exports.showCategories = (req, res) => {
    res.render('categoryPage', { categories });
};
