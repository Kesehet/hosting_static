# servant.py
import asyncio
import websockets
import pyperclip
import base64
from PIL import Image
from io import BytesIO

async def receive_clipboard(uri):
    async with websockets.connect(uri) as websocket:
        async for message in websocket:
            if message.startswith("IMAGE:"):
                image_data = base64.b64decode(message[len("IMAGE:"):])
                image = Image.open(BytesIO(image_data))
                image.show()  # Display the image (or save it to the clipboard if you have an appropriate tool)
                print("Received and displayed image")
            else:
                pyperclip.copy(message)
                print(f"Received and copied text: {message}")

if __name__ == "__main__":
    uri = "ws://https://0e4d29a9-f98a-458f-9982-ef6e3015650d-00-2ukn69p5kd4q5.pike.replit.dev"  # Replace <SERVER_IP> with the server's IP address
    asyncio.get_event_loop().run_until_complete(receive_clipboard(uri))
