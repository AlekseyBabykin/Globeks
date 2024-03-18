SELECT 
    c.id as id, 
    c.name as name, 
    s.name as sub_name, 
    s.id as sub_id,
    SUBSTRING(s.name, LEN('Подразделение 1.') + 1, LEN(s.name) - LEN('Подразделение 1.')) as sub_level,
   COUNT(*) OVER (PARTITION BY s.name) as colls_count
FROM 
    collaborators c
JOIN 
    subdivisions s ON c.subdivision_id = s.id
WHERE 
    s.name LIKE '%' + (
        SELECT RIGHT(s.name, 1) AS last_character
        FROM subdivisions s
        WHERE s.id IN (
            SELECT c.subdivision_id
            FROM collaborators c
            WHERE c.id = 710253
        )
    ) + '.%'
AND 
    c.age < 40
AND 
    s.id NOT IN (100055, 100059)
ORDER BY 
    s.name;

