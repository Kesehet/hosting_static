# servant.py
import time
import requests
import pyperclip
import base64
from PIL import Image
from io import BytesIO

SERVER_URL = "http://<SERVER_IP>:5000/clipboard"  # Replace <SERVER_IP> with the server's IP address

def get_clipboard():
    previous_clipboard_text = ""
    previous_clipboard_image = ""
    while True:
        try:
            response = requests.get(SERVER_URL)
            data = response.json()
            if 'text' in data and data['text'] != previous_clipboard_text:
                pyperclip.copy(data['text'])
                print(f"Received and copied text: {data['text']}")
                previous_clipboard_text = data['text']
            if 'image' in data and data['image'] != previous_clipboard_image:
                image_data = base64.b64decode(data['image'])
                image = Image.open(BytesIO(image_data))
                image.show()  # Display the image (or save it to the clipboard if you have an appropriate tool)
                print("Received and displayed image")
                previous_clipboard_image = data['image']
        except Exception as e:
            print(f"Error: {e}")
        time.sleep(1)

if __name__ == "__main__":
    get_clipboard()
