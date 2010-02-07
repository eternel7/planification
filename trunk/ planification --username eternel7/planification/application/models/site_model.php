<?php

class site_model extends Model 
{
	function Getall()
	{
		$q = $this->db->get('test');
		
		if ($q->num_rows()>0)
		{
			foreach ($q->result() as $row)
			{
				$data[]=$row;
			}
		}
		return $data;
	}
	
}