const Category = require('../models/category')
const slugify = require('slugify')


function createCategories(categories, parentId = null) {

    const categoryList = [];
    let category;
    if (parentId == null) {
        category = categories.filter(cat => cat.parentId === undefined);

    } else {
        category = categories.filter(cat => cat.parentId === parentId)
    }

    for (let cate of category) {

        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            children: createCategories(categories, cate._id)
        })
    }

    return categoryList
}


exports.addCategory = (req, res) => {
    categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }


    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId
    }
    console.log(categoryObj.parentId)



    const cat = new Category(categoryObj);
    cat.save((error, category) => {

        if (error) return res.status(400).json({ error })

        if (category) {
            return res.status(201).json({ category })
        }
    })

}


exports.getCategoris = (req, res) => {
    Category.find({}).exec((error, categoris) => {

        if (error) {
            res.status(400).json(error)
        }

        if (categoris) {

            const categoryList = createCategories(categoris)
            res.status(200).json({ categoryList })
        }
    })

}


