import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "dayjs/locale/fr";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.locale("fr");

// ***** Fonctions pour gérer les dates *****

// Fonction qui récupère date en string au format "25/08/2023" et retourne au format "vendredi 25 août 2023"

export const formatDate = (dateStr) => {
  const dateObj = dayjs(dateStr, "DD/MM/YYYY");

  const formattedDate = dateObj.format("dddd Do MMMM").toUpperCase();
  return formattedDate;

  // return (formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1));
};

// Fonction qui génère un tableau d'objets regroupant les séries TV par date de diffusion

export const getShowsByDate = (data) => {
  let showsByDate = {};
  data.forEach((show) => {
    let date = show.Date;
    if (!showsByDate[date]) {
      showsByDate[date] = [];
    }
    showsByDate[date].push(show);
  });

  const keys = Object.keys(showsByDate);
  const values = Object.values(showsByDate);

  const showsByDateFormatted = keys.map((key) => {
    return {
      date: [key][0],
      shows: values[keys.indexOf(key)],
    };
  });

  return showsByDateFormatted;
};

// Fonction de comparaison pour trier les dates (avec dayjs)
const compareDates = (a, b) => {
  const date1 = dayjs(a.date, "DD/MM/YYYY");
  const date2 = dayjs(b.date, "DD/MM/YYYY");
  return date1 - date2;
};

// Fonction qui permet de trier des dates de diffusion par ordre chronologique à partir d'un objet regroupant des séries par date de diffusion

export const getSortedShowsByDate = (objDates) => {
  return objDates.sort(compareDates);
};

// Fonction qui génère un tableau d'objets regroupant les séries TV par diffuseur

export const getShowsByPlatform = (data) => {
  let showsByPlatform = {};
  data.forEach((show) => {
    let platform = show.Plateforme;
    if (!showsByPlatform[platform]) {
      showsByPlatform[platform] = [];
    }
    showsByPlatform[platform].push(show);
  });

  const keys = Object.keys(showsByPlatform);
  const values = Object.values(showsByPlatform);

  const showsByPlatformFormatted = keys.map((key) => {
    return {
      platform: [key][0],
      shows: values[keys.indexOf(key)],
    };
  });

  // Tri des plateformes par ordre alphabétique
  
  showsByPlatformFormatted.sort((a, b) => {
    if (a.platform > b.platform) {
      return 1
    }
    if (a.platform < b.platform) {
      return -1
    }
    return 0;
  });

  return showsByPlatformFormatted;
};
