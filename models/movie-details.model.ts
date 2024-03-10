export interface IMovieDetails {
    // id: string;
    // poster: string;
    // title: string;
    // year: number

    description?: string;
    actors?: Tor[];
    // reviews;
    // keywords
};

export interface MovieDetails {
    short:     Short;
    imdbId:    string;
    top:       Top;
    main:      Main;
    fake:      Fake;
    storyLine: StoryLine;
}

export interface Fake {
    "#TITLE":    string;
    "#YEAR":     number;
    "#IMDB_ID":  string;
    "#RANK":     number;
    "#ACTORS":   string;
    "#AKA":      string;
    "#IMDB_URL": string;
    "#IMDB_IV":  string;
}

export interface Main {
    id:                      string;
    wins:                    Companies;
    nominations:             Companies;
    prestigiousAwardSummary: null;
    ratingsSummary:          MainRatingsSummary;
    episodes:                null;
    videos:                  Companies;
    videoStrip:              Akas;
    titleMainImages:         AlternateVersions;
    productionStatus:        ProductionStatus;
    primaryImage:            null;
    imageUploadLink:         Link;
    titleType:               MainTitleType;
    cast:                    Akas;
    creators:                any[];
    directors:               Director[];
    writers:                 Director[];
    isAdult:                 boolean;
    moreLikeThisTitles:      Akas;
    triviaTotal:             Companies;
    trivia:                  Akas;
    goofsTotal:              Companies;
    goofs:                   Akas;
    quotesTotal:             Companies;
    quotes:                  Akas;
    crazyCredits:            Akas;
    alternateVersions:       AlternateVersions;
    connections:             Akas;
    soundtrack:              Akas;
    titleText:               OriginalTitleText;
    originalTitleText:       OriginalTitleText;
    releaseYear:             MainReleaseYear;
    reviews:                 Companies;
    featuredReviews:         Akas;
    canRate:                 CanRate;
    iframeAddReviewLink:     Link;
    topQuestions:            AlternateVersions;
    faqs:                    AlternateVersions;
    releaseDate:             ReleaseDate;
    countriesOfOrigin:       MainCountriesOfOrigin;
    detailsExternalLinks:    AlternateVersions;
    spokenLanguages:         SpokenLanguages;
    akas:                    Akas;
    filmingLocations:        AlternateVersions;
    production:              Akas;
    companies:               Companies;
    productionBudget:        null;
    lifetimeGross:           null;
    openingWeekendGross:     null;
    worldwideGross:          null;
    technicalSpecifications: TechnicalSpecifications;
    runtime:                 MainRuntime;
    series:                  null;
    canHaveEpisodes:         boolean;
    contributionQuestions:   ContributionQuestions;
    __typename:              string;
}

export interface Akas {
    edges:      Edge[];
    __typename: string;
}

export interface Edge {
    node:       Node;
    __typename: string;
}

export interface Node {
    name?:                            Name;
    attributes?:                      null;
    category?:                        Language;
    characters?:                      null;
    episodeCredits?:                  EpisodeCredits;
    __typename:                       string;
    company?:                         Company;
    plotText?:                        PlotText;
    experimental_translatedPlotText?: null;
    author?:                          null;
}

export interface Language {
    id:         string;
    __typename: string;
}

export interface Company {
    id:          string;
    companyText: OriginalTitleText;
    __typename:  string;
}

export interface OriginalTitleText {
    text:       string;
    __typename: string;
}

export interface EpisodeCredits {
    total:      number;
    yearRange:  null;
    __typename: string;
}

export interface Name {
    id:            string;
    nameText:      OriginalTitleText;
    primaryImage?: null;
    __typename:    Typename;
}

export enum Typename {
    Name = "Name",
}

export interface PlotText {
    plaidHtml:  string;
    __typename: string;
}

export interface AlternateVersions {
    total:      number;
    edges:      any[];
    __typename: string;
}

export interface CanRate {
    isRatable:  boolean;
    __typename: string;
}

export interface Companies {
    total:      number;
    __typename: string;
}

export interface ContributionQuestions {
    contributionLink: Link;
    edges:            any[];
    __typename:       string;
}

export interface Link {
    url:        string;
    __typename: string;
}

export interface MainCountriesOfOrigin {
    countries:  CurrentProductionStage[];
    __typename: string;
}

export interface CurrentProductionStage {
    id:         string;
    text:       string;
    __typename: string;
}

export interface Director {
    totalCredits: number;
    category:     OriginalTitleText;
    credits:      DirectorCredit[];
    __typename:   string;
}

export interface DirectorCredit {
    name:       Name;
    attributes: null;
    __typename: string;
}

export interface ProductionStatus {
    currentProductionStage:  CurrentProductionStage;
    productionStatusHistory: ProductionStatusHistory[];
    restriction:             null;
    __typename:              string;
}

export interface ProductionStatusHistory {
    status:     CurrentProductionStage;
    __typename: string;
}

export interface MainRatingsSummary {
    topRanking: null;
    __typename: string;
}

export interface ReleaseDate {
    day:        number;
    month:      number;
    year:       number;
    country?:   CurrentProductionStage;
    __typename: string;
}

export interface MainReleaseYear {
    year:       number;
    __typename: string;
}

export interface MainRuntime {
    seconds:    number;
    __typename: string;
}

export interface SpokenLanguages {
    spokenLanguages: CurrentProductionStage[];
    __typename:      string;
}

export interface TechnicalSpecifications {
    soundMixes:   AspectRatios;
    aspectRatios: AspectRatios;
    colorations:  AspectRatios;
    __typename:   string;
}

export interface AspectRatios {
    items:      Item[];
    __typename: string;
}

export interface Item {
    conceptId:  string;
    text:       string;
    attributes: any[];
    __typename: string;
}

export interface MainTitleType {
    id:              string;
    canHaveEpisodes: boolean;
    __typename:      string;
}

export interface Short {
    "@context":    string;
    "@type":       string;
    url:           string;
    name:          string;
    description:   string;
    genre:         string[];
    datePublished: Date;
    actor:         Tor[];
    director:      Tor[];
    creator:       Tor[];
    duration:      string;
}

export interface Tor {
    "@type": string;
    url:     string;
    name?:   string;
}

export interface StoryLine {
    id:                string;
    summaries:         Akas;
    outlines:          Akas;
    synopses:          Akas;
    storylineKeywords: AlternateVersions;
    taglines:          AlternateVersions;
    genres:            Genres;
    certificate:       null;
    parentsGuide:      ParentsGuide;
    __typename:        string;
}

export interface Genres {
    genres:     CurrentProductionStage[];
    __typename: string;
}

export interface ParentsGuide {
    guideItems: Companies;
    __typename: string;
}

export interface Top {
    id:                   string;
    productionStatus:     ProductionStatus;
    canHaveEpisodes:      boolean;
    series:               null;
    titleText:            OriginalTitleText;
    titleType:            TopTitleType;
    originalTitleText:    OriginalTitleText;
    certificate:          null;
    releaseYear:          TopReleaseYear;
    releaseDate:          ReleaseDate;
    runtime:              TopRuntime;
    canRate:              CanRate;
    ratingsSummary:       TopRatingsSummary;
    meterRanking:         null;
    primaryImage:         null;
    images:               AlternateVersions;
    videos:               Companies;
    primaryVideos:        Akas;
    externalLinks:        Companies;
    metacritic:           null;
    keywords:             AlternateVersions;
    genres:               Genres;
    plot:                 Plot;
    plotContributionLink: Link;
    credits:              Companies;
    principalCredits:     PrincipalCredit[];
    reviews:              Companies;
    criticReviewsTotal:   Companies;
    triviaTotal:          Companies;
    engagementStatistics: null;
    subNavCredits:        Companies;
    subNavReviews:        Companies;
    subNavTrivia:         Companies;
    subNavFaqs:           Companies;
    subNavTopQuestions:   Companies;
    titleGenres:          TitleGenres;
    meta:                 Meta;
    castPageTitle:        Akas;
    creatorsPageTitle:    any[];
    directorsPageTitle:   DirectorsPageTitle[];
    countriesOfOrigin:    TopCountriesOfOrigin;
    production:           Akas;
    featuredReviews:      Akas;
    __typename:           string;
}

export interface TopCountriesOfOrigin {
    countries:  Language[];
    __typename: string;
}

export interface DirectorsPageTitle {
    credits:    DirectorsPageTitleCredit[];
    __typename: string;
}

export interface DirectorsPageTitleCredit {
    name:       Name;
    __typename: string;
}

export interface Meta {
    canonicalId:       string;
    publicationStatus: string;
    __typename:        string;
}

export interface Plot {
    plotText:   ValueClass;
    language:   Language;
    __typename: string;
}

export interface ValueClass {
    plainText:  string;
    __typename: string;
}

export interface PrincipalCredit {
    totalCredits: number;
    category:     CurrentProductionStage;
    credits:      DirectorCredit[];
    __typename:   string;
}

export interface TopRatingsSummary {
    aggregateRating: null;
    voteCount:       number;
    __typename:      string;
}

export interface TopReleaseYear {
    year:       number;
    endYear:    null;
    __typename: string;
}

export interface TopRuntime {
    seconds:             number;
    displayableProperty: DisplayableProperty;
    __typename:          string;
}

export interface DisplayableProperty {
    value:      ValueClass;
    __typename: string;
}

export interface TitleGenres {
    genres:     Genre[];
    __typename: string;
}

export interface Genre {
    genre:      OriginalTitleText;
    __typename: string;
}

export interface TopTitleType {
    displayableProperty: DisplayableProperty;
    text:                string;
    id:                  string;
    isSeries:            boolean;
    isEpisode:           boolean;
    categories:          Category[];
    canHaveEpisodes:     boolean;
    __typename:          string;
}

export interface Category {
    value:      string;
    __typename: string;
}
