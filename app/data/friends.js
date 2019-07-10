// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// Start with an array that hold 10 object to coincide with the 10 questions 
//each object will have a key value pair of
//name: (a string of the person name)
// photo (with a link)
// scores array (10 strings to coincide with the answers options)
// ===============================================================================


var friends = [
    {
        "name": "Logan",
        "photo": "https://guytondesigns.weebly.com/uploads/1/2/8/8/12880397/4505443_orig.png",
        "scores": [
            1,
            2,
            4,
            3,
            5,
            3,
            4,
            1,
            2,
            5
        ]
    },
    {
        "name": "Juan",
        "photo": "https://3.bp.blogspot.com/-m7hAdJtvrws/Ta2fZqjF4qI/AAAAAAAACXg/z0Wl-v4jskM/s1600/blog.jpg",
        "scores": [
            5,
            3,
            1,
            4,
            2,
            1,
            3,
            5,
            2,
            4
        ]
    },
    {
        "name": "Stephen",
        "photo": "https://img.izismile.com/img/img2/20090811/ugly_people_35.jpg",
        "scores": [
            2,
            4,
            5,
            3,
            1,
            5,
            3,
            1,
            4,
            2
        ]
    },
    {
        "name": "Alex",
        "photo": "https://i.imgur.com/CEnilHo.jpg",
        "scores": [
            3,
            4,
            3,
            5,
            4,
            1,
            4,
            3,
            4,
            5
        ]
    },
    {
        "name": "Elizabeth",
        "photo": "https://cdn.acidcow.com/pics/20130225/nice_girl_15.jpg",
        "scores": [
            3,
            4,
            1,
            5,
            5,
            5,
            3,
            4,
            4,
            1
        ]
    },
    {
        "name": "Daniela",
        "photo": "https://www.naijanews.com/wp-content/uploads/2017/04/cute-girl.jpg",
        "scores": [
            2,
            3,
            4,
            5,
            3,
            2,
            1,
            5,
            4,
            5
        ]
    },
    {
        "name": "Melissa",
        "photo": "https://www.sharedvalue.org/sites/default/files/pictures/picture-370501-1549540595.jpg",
        "scores": [
            3,
            4,
            5,
            5,
            5,
            4,
            3,
            1,
            2,
            5
        ]
    },
    {
        "name": "Erica",
        "photo": "https://i.pinimg.com/236x/4c/ee/d4/4ceed43b7cdd9231b5dc60eab226d2d1.jpg?nii=t",
        "scores": [
            3,
            2,
            4,
            3,
            4,
            5,
            3,
            1,
            2,
            4
        ]
    },
    {
        "name": "Marc",
        "photo": "https://i.pinimg.com/originals/1f/8f/88/1f8f88fd1dc3eb2aab83b71330777d04.jpg",
        "scores": [
            5,
            4,
            3,
            5,
            4,
            5,
            4,
            3,
            2,
            3
        ]
    },
    {
        "name": "Zack",
        "photo": "https://pbs.twimg.com/profile_images/1021674525828636673/0pek9eEC_400x400.jpg",
        "scores": [
            1,
            2,
            4,
            3,
            3,
            3,
            4,
            5,
            4,
            3
        ]
    }
  
  ];
  
  // Here we export the array. This makes it accessible to other files using require.
  module.exports = friends
  