FROM nginx:latest

LABEL authors=thxtome531@gmail.com

RUN mkdir -p /app/portfolio

COPY ./build /apps/portfolio/

WORKDIR /apps/portfolio/

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]