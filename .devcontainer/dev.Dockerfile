# Use the latest official Node.js image
FROM node:latest

# Set the working directory in the container
WORKDIR /workspace

# Install Oh My Posh dependencies
RUN apt-get update && \
    apt-get install -y wget fontconfig

# Install Oh My Posh
RUN wget https://github.com/JanDeDobbeleer/oh-my-posh/releases/download/v16.2.1/posh-linux-amd64 -O /usr/local/bin/oh-my-posh && \
    chmod +x /usr/local/bin/oh-my-posh

# Set the default shell to bash (optional)
SHELL ["/bin/bash", "-c"]

# Expose port 3000 (adjust based on your app)
EXPOSE 3000

# Command to run when the container starts
CMD ["bash"]