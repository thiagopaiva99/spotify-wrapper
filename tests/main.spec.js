import { expect } from 'chai';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

describe('Spotify Wrapper', () => {
    describe('smoke tests', () => {
        it('should exist the search method', () => {
            expect(search).to.exist;
        });

        it('should exist the search albums method', () => {
            expect(searchAlbums).to.exist;
        });

        it('should exist the search artists method', () => {
            expect(searchArtists).to.exist;
        });

        it('should exist the search tracks method', () => {
            expect(searchTracks).to.exist;
        });

        it('should exist the search playlists method', () => {
            expect(searchPlaylists).to.exist;
        });
    });

    describe('Generic Search', () => {
        it('should call fetch function', () => {
            const artists = search();
        });
    });
});
