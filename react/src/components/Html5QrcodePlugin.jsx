// file = Html5QrcodePlugin.jsx
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode"
import { useEffect, useState } from "react"

const qrcodeRegionId = "html5qr-code-full-region"

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = props => {
  let config = {}
  if (props.fps) {
    config.fps = props.fps
  }
  if (props.qrbox) {
    config.qrbox = props.qrbox
  }
  if (props.aspectRatio) {
    config.aspectRatio = props.aspectRatio
  }
  if (props.disableFlip !== undefined) {
    config.disableFlip = props.disableFlip
  }
  return config
}

const Html5QrcodePlugin = props => {
  const [cameraId, setCameraId] = useState("")
  const [cameraRenderInitial, setCameraRenderInitial] = useState(false)
  let _html5QrCode

  useEffect(() => {
    if (!_html5QrCode?.getState()) {
      const config = createConfig(props)

      // // when component mounts
      // const verbose = props.verbose === true;
      // // Suceess callback is required.
      // if (!(props.qrCodeSuccessCallback)) {
      //   throw "qrCodeSuccessCallback is required callback.";
      // }
      // const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
      // html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);

      // // cleanup function when component will unmount
      // return () => {
      //   html5QrcodeScanner.clear().catch(error => {
      //     console.error("Failed to clear html5QrcodeScanner. ", error);
      //   });
      // };

      // This method will trigger user permissions
      Html5Qrcode.getCameras()
        .then(devices => {
          /**
           * devices would be an array of objects of type:
           * { id: "id", label: "label" }
           */
          if (devices && devices.length) {
            console.log("Html5Qrcode executed.")
            var cameraId = devices[0].id
            setCameraId(cameraId)
            // .. use this to start scanning.

            _html5QrCode = new Html5Qrcode(/* element id */ qrcodeRegionId)
            _html5QrCode
              .start(
                { facingMode: "environment" },
                {
                  //deviceId: { exact: cameraId},
                  fps: 2, // Optional, frame per seconds for qr code scanning
                  qrbox: { width: 250, height: 250 }, // Optional, if you want bounded box UI
                  rememberLastUsedCamera: false,
                },
                (decodedText, decodedResult) => {
                  // do something when code is read
                  props.qrCodeSuccessCallback(decodedText, decodedResult, _html5QrCode)
                },
                errorMessage => {
                  // parse error, ignore it.
                },
              )
              .catch(err => {
                // Start failed, handle it.
                console.log(err)
              })
          }
        })
        .catch(err => {
          // handle err
        })
    }

    return () => {
      if (!_html5QrCode?.getState()) return
      _html5QrCode
        .stop()
        .then(ignore => {
          console.log("QR-CODE 停止運行")
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [])

  return <div id={qrcodeRegionId} />
}

export default Html5QrcodePlugin
