## How to upload `.env` to server

```
rsync -avH /home/user/path/to/file -e ssh user@server:/path/to/file
```

## How to deploy to now

```
now
now alias https://client-hnhexkxjeb.now.sh next-starter
now alias https://server-dgdvvinxwj.now.sh nextjs-starter-server
now rm client
```
