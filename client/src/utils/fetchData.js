import axios from 'axios';

const fetchData = async (path1, path2, path3) => {
  const [itemResponse, thumbnailsResponse, titleResponse] = await Promise.all([
    axios.get(path1),
    axios.get(path2),
    axios.get(path3),
  ]);
  thumbnailsResponse.data.thumbnailImages.forEach((url, i) => {
    if (itemResponse.data.colors[i]) {
      itemResponse.data.colors[i].thumbnail = url;
    }
  });
  itemResponse.data.title = titleResponse.data;
  return itemResponse.data;
};

export default fetchData;
