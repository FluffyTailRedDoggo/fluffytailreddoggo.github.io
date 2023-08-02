import require from 'require'

require(['require', 'directory-tree'], function(require){
    const dirTree = require("directory-tree");
    const tree = dirTree("res/", ['.jpg', '.png']);
    
    console.log(tree)
  
    var default_image = "https://raw.githubusercontent.com/FluffyTailRedDoggo/fluffytailreddoggo.github.io/main/icons/folder.png"
    
    make_array = function(prefix, basepath, localpath){
        var tree = dirTree(basepath + localpath, ['.jpg', '.png', '']);
        var output = []
        tree.children.forEach(function(element){
            if(element.name.endsWith(".jpg") || element.name.endsWith(".png")){
                output.append({
                    "title" : element.name,
                    "url" : prefix + basepath + localpath + element.name
                })
            }else{
                output.append({
                    "title" : element.name,
                    "url" : default_image
                })
            }
        })
        return output
    }
      
    var default_basepath = "https://raw.githubusercontent.com/FluffyTailRedDoggo/fluffytailreddoggo.github.io/main/"
    var res_folder = 'res/'
    
    $.each(make_array(default_basepath, res_folder, ""), function(i) {
        var templateString = '<div class="card text-white bg-dark mb-3 m-3" style="width: 18rem;">    <img class="card-img-top" src="'+ arr[i].url +'" alt="Card image cap">      <div class="card-body">  <h5>' + arr[i].title + '</h5> </p></div> </div>';
        $('#card-container').append(templateString);
    })
})

