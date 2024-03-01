import os
from uuid import uuid4


# Rename image file
def rename_image(instance, filename, path='images/'):
    ext = filename.split('.')[-1]
    filename = f'{uuid4()}.{ext}'
    return os.path.join(path, filename)
