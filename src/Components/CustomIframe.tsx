interface Props {
  url: string;
}

const CustomIframe = (props: Props): React.ReactElement => {
  const iframeId = "sample-iframe-id";

  const postMessageToIframe = (): void => {
    const helpCenter = document.getElementById(iframeId) as HTMLIFrameElement;

    const message = JSON.stringify({
      type: "boot",
      channel: "help-center-iframe",
      userId: "hsn34-54745-zx0",
      shouldShowProductTour: true,
    });

    helpCenter.contentWindow?.postMessage(message, "*");

    console.log("Sent the message");
  };

  return (
    <iframe
      title="help-center"
      src={props.url}
      onLoad={postMessageToIframe}
      id={iframeId}
      style={{ borderStyle: "none", width: "99%", height: "95vh" }}
    ></iframe>
  );
};

export default CustomIframe;
