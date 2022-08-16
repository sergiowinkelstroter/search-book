import { UilTimes } from "@iconscout/react-unicons";
export function Modal({ show, item, onClose }) {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  let description = item.volumeInfo.description;
  if (description.leght > 50) {
    description = description.substr(0, 200) + "...";
  }

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <UilTimes />
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a href={item.volumeInfo.previewLink} target="_blank">
                More
              </a>
            </div>
          </div>
          <h4 className="description">{description}</h4>
        </div>
      </div>
    </>
  );
}
