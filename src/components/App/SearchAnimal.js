import React from 'react';
import { useDropzone } from 'react-dropzone';
import { findAnimal } from '../../services/file';
import { useAsync } from 'react-use';

export const SearchAnimal = props => {
  const { onResult } = props;
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const { loading, error, value } = useAsync(async () => {
    if (acceptedFiles.length) {
      const value = await findAnimal(acceptedFiles[0]);
      onResult(value);
      return value;
    }
  }, [acceptedFiles]);

  return (
    <section className="container">
      {loading && <div>Loading</div>}
      {error && <div>{error}</div>}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Scan Animal</p>
      </div>
      {value && <pre>{value}</pre>}
    </section>
  );
};
