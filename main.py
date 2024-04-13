# using rembg from github  through api. remember to add it on readme the link of the developer
from rembg import remove
from PIL import Image


input = Image.open('dog.png')

output = remove(input)

output.save('out.png')