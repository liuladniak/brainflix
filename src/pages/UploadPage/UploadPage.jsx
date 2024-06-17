import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadPage.scss";
import publishIcon from "../../assets/icons/publish.svg";
import uploadIcon from "../../assets/icons/upload-file.svg";
import Button from "../../components/Button/Button";
import Wrapper from "../../components/Wrapper/Wrapper";

function UploadPage() {
  const [posterFile, setPosterFile] = useState(null);
  const [posterPreview, setPosterPreview] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setPosterFile(event.target.files[0]);
    setPosterPreview(URL.createObjectURL(event.target.files[0]));
    console.log(posterFile);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }

  return (
    <main className="upload">
      {success && (
        <div className="upload-success">
          <h3>Uploaded successfully!</h3>
          <h4>Thank you for uploading your file</h4>
        </div>
      )}
      <h2 className="upload__heading">Upload Video</h2>
      <form action="post" className="form-section" onSubmit={handleSubmit}>
        <Wrapper className="upload-form">
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
                  required
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
                required
              />
            </label>
            <label className="form__label" htmlFor="description">
              Add a video description
              <textarea
                className="form__field upload-desc__textarea"
                type="text"
                name="description"
                placeholder="Add a description to your video"
                required
              />
            </label>
          </div>
        </Wrapper>
        <Wrapper className="upload-publish">
          <Button className="btn--publish" iconUrl={publishIcon} type="submit">
            Publish
          </Button>
          <Button className="btn--cancel">Cancel</Button>
        </Wrapper>
      </form>
    </main>
  );
}

export default UploadPage;
