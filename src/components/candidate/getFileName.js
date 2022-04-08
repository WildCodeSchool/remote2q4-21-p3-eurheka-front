const getFileName = ({path}) => {
    if (path){
        return path.split("/");
    }
}

export default getFileName;