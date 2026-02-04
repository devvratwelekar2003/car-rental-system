"# Car Rental System" 

## Deployment / Production checklist

Before deploying or pushing to a remote repository make sure to:

- Do NOT commit sensitive values. Use environment variables for production secrets.
- Copy `.env.example` to a `.env` file (local only) and fill values like `DJANGO_SECRET_KEY`, `DJANGO_DEBUG`, `DJANGO_ALLOWED_HOSTS`, `SECURE_HSTS_SECONDS`, `SECURE_SSL_REDIRECT`, `SESSION_COOKIE_SECURE`, and `CSRF_COOKIE_SECURE`.
- Ensure `.gitignore` contains `env/`, `db.sqlite3`, `media/`, and `.env` so these aren't committed.

To run deploy checks locally (simulate production values):

```bat
set DJANGO_DEBUG=False
set DJANGO_SECRET_KEY=<a-strong-secret>
set DJANGO_ALLOWED_HOSTS=yourdomain.com,127.0.0.1
set SECURE_HSTS_SECONDS=31536000
set SECURE_HSTS_INCLUDE_SUBDOMAINS=True
set SECURE_HSTS_PRELOAD=True
set SECURE_SSL_REDIRECT=True
set SESSION_COOKIE_SECURE=True
set CSRF_COOKIE_SECURE=True
\"%CD%\%\\env\\Scripts\\python.exe\" manage.py check --deploy
```

Follow these steps before pushing to GitHub to avoid exposing secrets and to ensure Django's deploy checks pass.
"# car-rental-system" 
