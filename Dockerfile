# Create image based on the official Node 6 image from dockerhub
FROM maven

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Expose the port the app runs in
EXPOSE 8080

# Link current folder to container
ADD . /app/

# Serve the app
CMD ["mvn", "spring-boot:run"]