from generate import generate_cells, generate_borders, generate_matrix
from worldmap import plot


def main():
    generate_cells('data/worldmap/grid.asc', 'data/worldmap/cells.csv')
    generate_borders('data/worldmap/cells.csv', 'data/worldmap/borders.csv')
    plot('data/worldmap/cells.csv', 'data/worldmap/borders.csv')


def matrix():
    generate_matrix('data/worldmap/grid.asc', 'matrix.csv')


if __name__ == "__main__":
    print("Our World in Data")