FROM overv/openstreetmap-tile-server
COPY data.osm.pbf /data.osm.pbf
RUN /run.sh import
VOLUME ["/var/lib/postgresql/12/main", "/var/lib/mod_tile"]
ENTRYPOINT ["/run.sh", "run"]
docker build . -t osm-self-hosted
docker run -p 80:80 -p 5432:5432 --name osm-self-hosted -e ALLOW_CORS=1 -d osm-self-hosted run
