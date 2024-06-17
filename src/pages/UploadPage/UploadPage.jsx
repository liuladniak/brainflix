import { useRef, useState } from "react";
import "./UploadPage.scss";
import publishIcon from "../../assets/icons/publish.svg";
import uploadIcon from "../../assets/icons/upload-file.svg";
import Button from "../../components/Button/Button";
import Wrapper from "../../components/Wrapper/Wrapper";

function UploadPage() {
  const [posterFile, setPosterFile] = useState(null);
  const [posterPreview, setPosterPreview] = useState(null);

  const fileInputRef = useRef(null);
  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setPosterFile(event.target.files[0]);
    setPosterPreview(URL.createObjectURL(event.target.files[0]));
    console.log(posterFile);
  };

  return (
    <main className="upload">
      <h2 className="upload__heading">Upload Video</h2>
      <form action="post" className="upload-form">
        <div className="upload-preview">
          <label className="form__label" htmlFor="thumbnail">
            Video thumbnail
          </label>
          {posterPreview ? (
            <div className="upload-form__img">
              <img src={posterPreview} alt="video thumbnail image" />
            </div>
          ) : (
            <div
              onClick={handleChooseFileClick}
              className="upload-form__choose-file"
            >
              <div>
                <img
                  className="upload-form__icon"
                  src={uploadIcon}
                  alt="upload icon"
                />
              </div>
              <input
                ref={fileInputRef}
                className="upload-form__img-default"
                type="file"
                name="thumbnail"
                onChange={handleFileChange}
              />
              <Wrapper className="upload-drag-n-drop">
                <span>Drag & Drop your file here or</span>
                <span>Click to select your file</span>
              </Wrapper>
              <Wrapper className="upload-supports">
                <span>Supports files: PNG, JPG, JPEG</span>
              </Wrapper>
            </div>
          )}
        </div>
        <div className="upload-desc">
          <label className="form__label" htmlFor="title">
            Title your video
            <input
              className="form__field upload-desc__input"
              type="text"
              name="title"
              placeholder="Add a title to your video"
            />
          </label>
          <label className="form__label" htmlFor="description">
            Add a video description
            <textarea
              className="form__field upload-desc__textarea"
              type="text"
              name="description"
              placeholder="Add a description to your video"
            />
          </label>
        </div>
      </form>
      <Wrapper className="upload-publish">
        <Button
          to="/uploadSuccess"
          className="btn--publish"
          iconUrl={publishIcon}
        >
          Publish
        </Button>
        <Button className="btn--cancel">Cancel</Button>
      </Wrapper>
    </main>
  );
}

export default UploadPage;
