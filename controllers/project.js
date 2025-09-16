
const createProjects = (req, res) =>{
    res.send('Creat all projects')

}

const getAllProjects = (req, res) =>{
    res.send('Get all projects')

}

const getProjects = (req, res) =>{
    res.send('Get single project')

}

const updateProjects = (req, res) =>{
    res.send('Update projects')

}

const deleteProjects = (req, res) =>{
    res.send('delete projects')

}


module.exports = {
    createProjects,
    getAllProjects,
    getProjects,
    updateProjects,
    deleteProjects,
}

