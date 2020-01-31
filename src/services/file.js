import axios from 'axios';
import { pipe, sortBy, prop, head, reverse,filter } from 'ramda';

export const findAnimal = async file => {
  const formData = new FormData();
  formData.append('file', file);

  const { data } = await axios({
    url: process.env.REACT_APP_PREDICTION_URL,
    method: 'POST',
    data: formData,
    headers: {
      'Prediction-Key': process.env.REACT_APP_PREDICTION_KEY,
      'Content-Type': 'application/octet-stream',
    },
  });

  return pipe(
    filter(x => x.probability > 0.7),
    sortBy(x => x.boundingBox.width * x.boundingBox.height),
    reverse,
    head,
    prop('tagName')
    // map(
    //   x =>
    //     `${x.tagName}: ${x.probability * 100}% (size ${x.boundingBox.width *
    //       x.boundingBox.height})`,
    // ),
    // join('\n'),
  )(data.predictions);
};
