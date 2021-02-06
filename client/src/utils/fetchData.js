import axios from 'axios';

const fetchData = async (path1, path2) => {
  const [itemResponse, thumbnailsResponse] = await Promise.all([
    axios.get(path1),
    axios.get(path2),
  ]);
  thumbnailsResponse.data.thumbnailImages.forEach((url, i) => {
    if (itemResponse.data.colors[i]) {
      itemResponse.data.colors[i].thumbnail = url;
    }
  });
  return itemResponse.data;
};

export default fetchData;
