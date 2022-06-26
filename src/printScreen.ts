import Jimp from "jimp";
import robot from "robotjs";

async function printScreen(): Promise<string> {
  const { x, y }: { x: number; y: number } = robot.getMousePos();
  const size: number = 100;
  const screencap: robot.Bitmap = robot.screen.capture(
    x - size,
    y - size,
    size * 2,
    size * 2
  );
  const image = new Jimp({
    data: screencap.image,
    width: screencap.width,
    height: screencap.height,
  });
  let pos: number = 0;
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
    /* eslint-disable no-plusplus */
    image.bitmap.data[idx + 2] = screencap.image.readUInt8(pos++);
    image.bitmap.data[idx + 1] = screencap.image.readUInt8(pos++);
    image.bitmap.data[idx + 0] = screencap.image.readUInt8(pos++);
    image.bitmap.data[idx + 3] = screencap.image.readUInt8(pos++);
    /* eslint-enable no-plusplus */
  });
  const base64Image: string = await image.getBase64Async(Jimp.MIME_PNG);
  const base64: string = base64Image.split(",")[1];
  return base64;
}

export default printScreen;
