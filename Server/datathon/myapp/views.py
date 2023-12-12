from django.http import JsonResponse
from django.middleware.csrf import get_token

class ImageUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, format=None):
        image_file = request.FILES.get('image')
        # Process the image file as needed (e.g., save it to disk or perform further operations)
        # ...

        return Response({'message': 'Image uploaded successfully'})


def upload_image(request):
    if request.method == 'POST':
        print('POST request')
        print(request.POST)
    return JsonResponse({'message': 'Image uploaded'})


def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})


def my_endpoint_view(request):
    csrf_token = get_token(request)
    data = {
        'message': csrf_token,
        'user': 'John Doe',
    }
    return JsonResponse(data)


def login(request):
    data = {
        'message': 'Login successful',
        'user': 'John Doe',
    }
    return JsonResponse(data)
