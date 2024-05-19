# servant.py
import time
import requests
import pyperclip
import base64
from PIL import Image
from io import BytesIO

GITHUB_RAW_URL = "https://raw.githubusercontent.com/Kesehet/hosting_static/main/temp/python/servant.json"

def get_clipboard_data():
    response = requests.get(GITHUB_RAW_URL)
    if response.status_code == 200:
        return response.json()
    return {}

def update_clipboard():
    previous_clipboard_text = ""
    previous_clipboard_image = ""
    while True:
        try:
            clipboard_data = get_clipboard_data()
            if 'text' in clipboard_data and clipboard_data['text'] != previous_clipboard_text:
                pyperclip.copy(clipboard_data['text'])
                print(f"Received and copied text: {clipboard_data['text']}")
                previous_clipboard_text = clipboard_data['text']
            if 'image' in clipboard_data and clipboard_data['image'] != previous_clipboard_image:
                image_data = base64.b64decode(clipboard_data['image'])
                image = Image.open(BytesIO(image_data))
                image.show()  # Display the image (or save it to the clipboard if you have an appropriate tool)
                print("Received and displayed image")
                previous_clipboard_image = clipboard_data['image']
        except Exception as e:
            print(f"Error: {e}")
        time.sleep(5)  # Increase interval to avoid rate limiting

if __name__ == "__main__":
    update_clipboard()
