import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/historial.module.css';
import { useRouter } from 'next/router';

export default function Historial() {
    const [encomiendas, setEncomiendas] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState(''); // 'entregado', 'pendiente', ''
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Número de elementos por página
    const router = useRouter();

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                let allData = [];
                let nextUrl = 'http://34.29.123.189/encomiendas/';
                
                // Loop para cargar todas las páginas
                while (nextUrl) {
                    const response = await axios.get(nextUrl);
                    allData = [...allData, ...response.data.results];
                    nextUrl = response.data.next; // Siguiente página
                }

                setEncomiendas(allData);
            } catch (error) {
                console.error('Error al obtener los datos de encomiendas:', error.message);
                setError('No se pudieron cargar las encomiendas.');
            }
        };

        fetchAllData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
        setCurrentPage(1); // Reinicia la página actual al buscar
    };

    const handleFilter = (status) => {
        setFilter(status);
        setCurrentPage(1); // Reinicia la página actual al filtrar
    };

    // Filtrar los datos antes de paginar
    const filteredData = encomiendas
        .filter((encomienda) =>
            encomienda.residente.toLowerCase().includes(searchTerm) ||
            encomienda.departamento.toLowerCase().includes(searchTerm)
        )
        .filter((encomienda) => {
            if (filter === 'entregado') return encomienda.estado === 'Entregado';
            if (filter === 'pendiente') return encomienda.estado === 'Pendiente';
            return true;
        });

    // Calcular la paginación
    const totalPages = Math.ceil(filteredData.length / itemsPerPage); // Número total de páginas
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Historial de Encomiendas</h1>
            <button className={styles.backButton} onClick={() => router.push('/')}>
                ← Volver
            </button>
            <div className={styles.filters}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Buscar por departamento o residente..."
                    onChange={handleSearch}
                />
                <div className={styles.filterButtons}>
                    <button
                        className={`${styles.filterButton} ${filter === '' && styles.activeFilter}`}
                        onClick={() => handleFilter('')}
                    >
                        Todos
                    </button>
                    <button
                        className={`${styles.filterButton} ${filter === 'entregado' && styles.activeFilter}`}
                        onClick={() => handleFilter('entregado')}
                    >
                        Entregados
                    </button>
                    <button
                        className={`${styles.filterButton} ${filter === 'pendiente' && styles.activeFilter}`}
                        onClick={() => handleFilter('pendiente')}
                    >
                        Pendientes
                    </button>
                </div>
            </div>
            {error ? (
                <p className={styles.error}>{error}</p>
            ) : (
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Fecha de Llegada</th>
                                <th>Departamento</th>
                                <th>Residente</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((encomienda) => (
                                <tr key={encomienda.id}>
                                    <td>{new Date(encomienda.Fecha_Llegada).toLocaleString()}</td>
                                    <td>{encomienda.departamento}</td>
                                    <td>{encomienda.residente}</td>
                                    <td
                                        className={
                                            encomienda.estado === 'Pendiente'
                                                ? styles.pendingBadge
                                                : styles.deliveredBadge
                                        }
                                    >
                                        {encomienda.estado}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={styles.pagination}>
                        <button
                            className={styles.paginationButton}
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        >
                            Anterior
                        </button>
                        <span>
                            Página {currentPage} de {totalPages}
                        </span>
                        <button
                            className={styles.paginationButton}
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
